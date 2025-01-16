import express, { response } from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors";
import fs from "fs";
import cron from "node-cron";

import { initializeSocket } from "./lib/socket.js";

import { connectDB } from "./lib/db.js";

import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";
import { createServer } from "http";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const ___dirname = path.resolve();

const httpServer = createServer(app);

initializeSocket(httpServer);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json()); // to parse req.body
// Pass no parameters
app.use(clerkMiddleware()); // this will add auth to req obj => req.auth.userId
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(___dirname, "temp"),
    createParentPath: true,
    limits: {
      fileSize: 30 * 1024 * 1024, // maximum file size upload is 30MB
    },
  })
);

// cron jobs to delete temporary folder at 0:00:00 of each day
const tempDir = path.join(process.cwd(), "tmp");
cron.schedule("0 0 * * *", () => {
  if (fs.existsSync(tempDir)) {
    fs.readdir(tempDir, (err, files) => {
      if (err) {
        console.log("error", err);
        return;
      }
      for (const file of files) {
        fs.unlink(path.join(tempDir, file), (err) => {});
      }
    });
  }
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

// error handler
app.use((error, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message,
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  connectDB();
});

// socketio will be added later after ffrontend
