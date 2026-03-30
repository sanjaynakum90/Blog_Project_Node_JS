import Blog from "../model/Blog.js";
import HttpError from "../middleware/HttpError.js";

const createBlog = async (req, res, next) => {
    try {
        const { title, author, content } = req.body;

        if (!title || !author || !content) {
            return next(new HttpError("Title, author and content are required", 400));
        }

        const blogImage = req.files?.blogImage?.[0]?.path;
        const blogVideo = req.files?.blogVideo?.[0]?.path;

        if (!blogImage) {
            return next(new HttpError("Blog image is required", 400));
        }

        const newPost = await Blog.create({
            title,
            author,
            content,
            blogImage,
            blogVideo,
        });

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: newPost,
        });
    } catch (error) {
        next(error);
    }
};

export default { createBlog };