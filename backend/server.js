const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// ===== In-Memory Storage =====
let users = [];
let cart = [];

// ===== Products (With Image + Description) =====
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    description: "High performance laptop for work and gaming.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 20000,
    description: "Latest smartphone with advanced camera features.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    description: "Noise cancelling wireless headphones.",
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 8000,
    description: "Advanced smartwatch with fitness tracking and notifications.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "AirPods",
    price: 12000,
    description: "True wireless earbuds with crystal clear sound.",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Smart Speaker",
    price: 6000,
    description: "Voice controlled smart speaker with premium sound.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80"
  }
];
// ================= AUTH APIs =================

// Register
app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });

  res.json({ message: "User registered successfully" });
});

// Login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

// ================= PRODUCT API =================

app.get("/api/products", (req, res) => {
  res.json(products);
});

// ================= CART APIs =================

// Get Cart
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// Add to Cart
app.post("/api/cart", (req, res) => {
  const product = req.body;

  const exists = cart.find(item => item.id === product.id);

  if (!exists) {
    cart.push(product);
  }

  res.json({ message: "Product added to cart" });
});

// Remove from Cart
app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);

  cart = cart.filter(item => item.id !== id);

  res.json({ message: "Product removed from cart" });
});

// ================= START SERVER =================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});