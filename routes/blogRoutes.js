import express from "express";
import uploads from "../middleware/upload.js";
import blogController from "../controller/blogController.js";

const router = express.Router();

router.post(
  "/add",
  uploads.fields([
    { name: "blogImage", maxCount: 1 },
    { name: "blogVideo", maxCount: 1 },
  ]),
  blogController.createBlog
);

export default router;