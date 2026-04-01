# 📝 Blog & User Management API

A RESTful API built with Node.js and Express for managing blogs and users.
Supports CRUD operations, authentication, and file uploads.

---

## 🚀 Features

* User Registration & Login
* Blog CRUD Operations
* Image & Video Upload (Cloudinary)
* Secure Password Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Cloudinary
* JWT

---

# 📸 API Testing (Postman)

## 🔹 1. Server Check

![Image](https://voyager.postman.com/gif/request-reponse-validation-1-postman.gif)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AQAgP13Tcg86Y1dr728eM8Q.png)

---

## 🔹 2. Create Blog (POST)

![Image](https://blog.bytescale.com/content/images/2022/05/Untitled-6.webp)

![Image](https://i.sstatic.net/955xK.png)

**Form-Data:**

* title
* content
* author
* blogImage (file)
* blogVideo (file)

---

## 🔹 3. Get All Blogs

![Image](https://i.sstatic.net/P6PN9.png)

![Image](https://us1.discourse-cdn.com/getpostman/original/3X/5/c/5c4a9769ba4e44150dc88ac9233ec44ece5b7d61.png)

---

## 🔹 4. Get Single Blog

![Image](https://us1.discourse-cdn.com/getpostman/original/3X/0/6/0621cb5081e05d2fc2b56ec9e450100ddc669e2a.jpeg)

![Image](https://assets.postman.com/postman-docs/ramen-script.png)

---

## 🔹 5. Update Blog

![Image](https://us1.discourse-cdn.com/getpostman/optimized/2X/3/32b050e24948826236e09beb3b597091af01a6b6_2_690x396.png)

![Image](https://us1.discourse-cdn.com/getpostman/original/3X/4/b/4b57b1bd5642a1ecb59e57222ab63d1ae3d08025.png)

---

## 🔹 6. User Registration

![Image](https://i.sstatic.net/Tpoz5.png)

![Image](https://community.postman.com/uploads/short-url/lBOhMEePR0G87DwsWAtr4CR2VyN.png)

---

## 🔹 7. User Login

![Image](https://developers.onelogin.com/assets/img/pages/quickstart/using-postman/image07.png)

![Image](https://us1.discourse-cdn.com/getpostman/original/3X/a/1/a1d4b9cb9cb3a98a8276790baf4510377a19903b.png)

---

## ⚠️ Common Errors

### ❌ Unexpected Field

* Check Multer field names:

  * `blogImage`
  * `blogVideo`
* Ensure correct **form-data keys**

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

---

## ▶️ Run

```bash
npm start
```

---

## 🌐 Environment Variables

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 👨‍💻 Author

Sanjay Nakum

---

## ⭐ Support

Give a ⭐ if you like this project!
