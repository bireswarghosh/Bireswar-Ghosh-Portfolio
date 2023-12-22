import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import the cors package

export const app = express();

// Setup CORS
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);

// The rest of your code...