import express from "express";

import blogController from "../controller/blogController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/add",
  upload.fields([
    { name: "blogImage", maxCount: 1 },
    { name: "blogVideo", maxCount: 1 },
  ]),
  blogController.createBlog,
);

router.get("/allBlogs", blogController.getAllBlog);


router.get("/:id", blogController.getBlogById);

router.patch(
  "/update/:id",
  upload.fields([
    { name: "blogImage", maxCount: 1 },
    { name: "blogVideo", maxCount: 1 },
  ]),
  blogController.updateBlogData,
);

router.delete("/delete/:id", blogController.deleteBlog);

export default router;