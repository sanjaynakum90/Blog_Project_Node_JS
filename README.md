# 📝 Blog & User Management API

A RESTful API built with Node.js and Express for managing blogs and users.
This project supports CRUD operations for blogs, user authentication, and file uploads (images & videos).

---

## 🚀 Features

### 👤 User Module

* Register a new user
* Login user
* Password hashing for security
* Role-based user data

### 📰 Blog Module

* Create blog (with image & video upload)
* Get all blogs
* Get single blog by ID
* Update blog
* Delete blog

### 📁 File Uploads

* Image upload (Cloudinary)
* Video upload support

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* Multer (file upload)
* Cloudinary (media storage)
* JWT (Authentication)

---

## 📂 API Endpoints

### 🔹 User APIs

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| POST   | `/user/add`   | Register user |
| POST   | `/user/login` | Login user    |

---

### 🔹 Blog APIs

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| GET    | `/blog/`           | Check server    |
| POST   | `/blog/add`        | Create blog     |
| GET    | `/blog/allBlogs`   | Get all blogs   |
| GET    | `/blog/:id`        | Get single blog |
| PATCH  | `/blog/update/:id` | Update blog     |
| DELETE | `/blog/delete/:id` | Delete blog     |

---

## 📥 Request Examples

### ✅ Create Blog

**POST** `/blog/add`

**Form-Data:**

```
title: xyz1
content: xyz3
author: xyz2
blogImage: (file)
blogVideo: (file)
```

---

### ✅ Update Blog

**PATCH** `/blog/update/:id`

```
title: Start Your Day Early
content: Updated content here
```

---

### ✅ User Registration

**POST** `/user/add`

```json
{
  "name": "alice",
  "email": "alice@gmail.com",
  "password": "1234567890",
  "phone": "12344321"
}
```

---

### ✅ User Login

**POST** `/user/login`

```json
{
  "email": "alice@gmail.com",
  "password": "1234567890"
}
```

---

## ⚠️ Common Issues

### ❌ "Unexpected field" Error

* Make sure your field names match exactly with backend (e.g. `blogImage`, `blogVideo`)
* Check Multer configuration

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

---

## ▶️ Run Project

```bash
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 📌 Future Improvements

* Add pagination for blogs
* Add comments & likes
* Improve validation
* Add Swagger documentation

---

## 👨‍💻 Author

**Sanjay Nakum**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
