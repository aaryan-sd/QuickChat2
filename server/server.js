import path from "path";
import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongo from './db/connectionToMongo.js';
import messagesRoutes from './routes/messages.routes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

dotenv.config();

const port = process.env.PORT || 8000;

const __dirname = path.resolve();


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messagesRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(port, () => {
  connectToMongo();
  console.log(`Example server listening on port ${port}`)
})