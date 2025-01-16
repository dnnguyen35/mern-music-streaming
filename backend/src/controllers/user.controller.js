import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    // const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getAllUsers", error);
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const { otherUserId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: otherUserId, receiverId: currentUserId },
        { senderId: currentUserId, receiverId: otherUserId },
      ],
    }).sort({ createAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Errror in getMessages", error);
    next(error);
  }
};
