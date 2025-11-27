# **NextLevel Shop – Full Stack Product Management App**

A modern full-stack **Next.js + Express.js + MongoDB** application for managing products with secure authentication, product creation, deletion, and dynamic UI powered by the Next.js App Router.

Designed for **speed, clarity, and security**, with a responsive UI and real-time backend API.

---

# 🚀 Features

* 🔐 **User Authentication** (Register + Login)
* 📦 **Add / View / Delete Products**
* 🗂 **Product Filtering & Search**
* 🎨 **Modern UI** with TailwindCSS + Custom Loading Screens
* ⚙ **Backend API (Express.js + MongoDB)**
* 🌐 **Fully Deployable** on Vercel 

---

# 🛠 **Tech Stack**

### **Frontend**

* Next.js (App Router)
* TypeScript
* TailwindCSS
* NextAuth
* Axios

### **Backend**

* Express.js
* MongoDB (Atlas)
* bcryptjs
* CORS

---

# 📥 **Setup & Installation Instructions**

## **1️⃣ Clone the Repository**
Frontend:
```bash
git clone https://github.com/Rakibislam22/first-next-app.git
```
Backend:
```bash
git clone https://github.com/Rakibislam22/next-server.git
```

---

## **2️⃣ Install Dependencies**

### Frontend (Next.js)

```bash
cd first-next-app
npm install
```

### Backend (Express)

```bash
cd next-server
npm install
```

---

## **3️⃣ Environment Variables**

### Frontend – create `.env.local`

```
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=anything-long-random
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Backend – create `.env`

```
MONGO_URI=YOUR_MONGODB_ATLAS_URI
FRONTEND_URL=http://localhost:3000
PORT=5000
```

---

## **4️⃣ Run the App Locally**

### Start backend:

```bash
cd next-server
node index.js
```

### Start frontend:

```bash
cd first-next-app
npm run dev
```

Now open:

👉 **[http://localhost:3000](http://localhost:3000)**

---

# 🧭 **API Route Summary (Backend)**

### **Auth Routes**

| Method | Route       | Description                     |
| ------ | ----------- | ------------------------------- |
| POST   | `/register` | Register new user               |
| POST   | `/login`    | Login user and return user data |

---

### **Product Routes**

| Method | Route           | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/products`     | Get all products   |
| GET    | `/products/:id` | Get single product |
| POST   | `/products`     | Create new product |
| DELETE | `/products/:id` | Delete product     |

---

# 🧭 **Frontend Route Summary (Next.js)**

| Page                    | Route                        | Description          |
| ----------------------- | ---------------------------- | -------------------- |
| Home                    | `/`                          | Landing page         |
| Products                | `/products`                  | All products list    |
| Product Details         | `/products/[id]`             | View single product  |
| Login                   | `/login`                     | User login           |
| Register                | `/register`                  | User registration    |
| Dashboard → Manage      | `/dashboard/manage-products` | View/delete products |
| Dashboard → Add Product | `/dashboard/add-product`     | Create a new product |

---

# 🏁 Deployment Guide

### **Frontend → Vercel**

* Import GitHub repo into Vercel
* Add environment variables inside project settings
* Deploy with 1 click

### **Backend → Vercel/Render / Railway**

* Create new Web Service
* Add environment variables
* Must use:

  ```js
  const PORT = process.env.PORT || 5000;
  ```
* Deploy & add the backend URL to frontend env

---

# ✔ License

This project is open-source. Feel free to modify and improve.

