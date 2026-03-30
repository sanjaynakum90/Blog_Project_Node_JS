import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello from sever");
});

app.use((req, res, next) => {
  next(new HttpError("Requested routes not found", 404));
});

app.use((error, req, res, next) => {
  res
    .status(error.statusCode || 500)
    .json({
      success: false,
      message: error.message || "Internal Server Error",
    });
});

const port = process.env.PORT || 500;

async function startServer() {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`server listing on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startServer();
