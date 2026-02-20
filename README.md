# 🛒 MyShop – E-Commerce Web Application

MyShop is a minimal full-stack e-commerce web application built using **React.js** for the frontend and **Node.js (Express)** for the backend.

The application allows users to register, login, browse products, view detailed product information, add items to cart, and logout securely.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Logout functionality
- Protected routes (Products & Cart accessible only after login)

### 🏪 Product Management
- Product listing page
- Product images
- Product descriptions
- Individual product detail page
- Dynamic routing (`/products/:id`)

### 🛒 Shopping Cart
- Add product to cart
- Remove product from cart
- View cart items

### 🎨 UI Features
- Professional background design
- Responsive product cards
- Product detail layout
- Navbar with dynamic menu
- Logout redirection to home

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- CORS
- In-memory storage (No database used)

---

## 📁 Project Structure
ecommerce-app/
│
├── backend/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ ├── Landing.js
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Products.js
│ │ ├── ProductDetail.js
│ │ ├── Cart.js
│ │ ├── api.js
│ │ └── assets/
│ │
│ └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
