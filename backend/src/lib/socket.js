import { Server } from "socket.io";
import { Message } from "../models/message.model.js";

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  const userSockets = new Map(); //{userId: socketId}
  const userActivities = new Map(); //{userId: activity}

  io.on("connection", (socket) => {
    socket.on("user_connected", (userId) => {
      userSockets.set(userId, socket.id);
      userActivities.set(userId, "Online");

      // broadcast to all the other connected socket users that this user just connected
      io.emit("user_connected", userId);
      socket.emit("users_online", Array.from(userSockets.keys()));
      io.emit("activities", Array.from(userActivities.entries()));
    });

    socket.on("update_activity", ({ userId, activity }) => {
      console.log("activity_updated", userId, activity);
      userActivities.set(userId, activity);
      io.emit("activity_updated", { userId, activity });
    });

    socket.on("send_message", async (data) => {
      try {
        const { senderId, receiverId, content } = data;

        const message = await Message.create({ senderId, receiverId, content });

        //send to receiverUser in real-time, if they online
        const receiverSocketId = userSockets.get(receiverId);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("receive_message", message);
        }
        socket.emit("message_sent", message);
      } catch (error) {
        console.log("Send message error", error);
        socket.emit("message_error", error.message);
      }
    });

    socket.on("disconnect", () => {
      let disconnectionUserId = null;

      for (const [userId, socketId] of userSockets.entries()) {
        if (socketId === socket.id) {
          disconnectionUserId = userId;
          userSockets.delete(userId);
          userActivities.delete(userId);
          break;
        }
      }

      if (disconnectionUserId) {
        io.emit("user_disconnected", disconnectionUserId);
      }
    });
  });
};
