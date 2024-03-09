import express from "express"; //package imports
import dotenv from "dotenv";   //package imports
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";        //file imports
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js"; //file imports

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //allows to extract fields such fullName and other like in auth.controller.js
                          // or to parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser());  //calling cookieParser just like a middleware


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});