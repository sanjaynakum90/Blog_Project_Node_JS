import Blog from "../model/Blog.js";
import HttpError from "../middleware/HttpError.js";
import cloudinary from "../config/cloudinary.js";

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

const getAllBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find({})

        if (blogs.length === 0) {
            res.status(200).json({ message: "no blog data found " })
        }

        res.status(200).json({ message: "blog data fetched successfully", blogs })


    } catch (error) {
        next(new HttpError(error.message))
    }
}

const getBlogById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const blog = await Blog.findById(id)

        if (!blog) {
            return next(new HttpError({ message: "blog not found with this id" }, 404))
        }

        res.status(200).json({ success: true, blog })
    } catch (error) {
        next(new HttpError(error.message))
    }
}

const deleteBlog = async (req, res, next) => {
    try {
        const id = req.params.id;

        const blog = await Blog.findById(id)

        if (!blog) {
            return next(new HttpError("requested blog not found with this id", 404))
        }

        await cloudinary.uploader.destroy(blog.cloudinary_id);

        await blog.deleteOne()


        res.status(200).json({ success: true, message: "blog data deleted successfully" })
    } catch (error) {
        next(new HttpError(error.message))
    }
}
const updateBlogData = async (req, res, next) => {
    try {
        const id = req.params.id;

        const blog = await Blog.findById(id);

        if (!blog) {
            return next(new HttpError("Requested blog not found with this id", 404));
        }

        const updates = Object.keys(req.body);

        const allowedUpdate = ["title", "content"];

        const isValid = updates.every((field) =>
            allowedUpdate.includes(field)
        );

        if (!isValid) {
            return next(new HttpError("Only allowed fields can be updated", 400));
        }

        updates.forEach((field) => {
            blog[field] = req.body[field];
        });

        if (req.file) {
            if (blog.cloudinary_id) {
                await cloudinary.uploader.destroy(blog.cloudinary_id);
            }

            blog.image = req.file.path;
            blog.cloudinary_id = req.file.filename;
        }

        await blog.save();

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            blog
        });

    } catch (error) {
        console.error(error);
        return next(new HttpError("Something went wrong", 500));
    }
};
export default { createBlog, getAllBlog, getBlogById, deleteBlog, updateBlogData };