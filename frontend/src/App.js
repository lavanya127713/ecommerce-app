import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";
import { useState } from "react";

import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav>
        <h2 className="logo">MyShop</h2>

        <div>
          {!isLoggedIn && <Link to="/">Home</Link>}
          {!isLoggedIn && <Link to="/login">Login</Link>}
          {!isLoggedIn && <Link to="/register">Register</Link>}

          {isLoggedIn && <Link to="/products">Products</Link>}
          {isLoggedIn && <Link to="/cart">Cart</Link>}
          {isLoggedIn && (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      <div className="container">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<Landing />} />

          {/* Login */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/products" replace />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* IMPORTANT: Detail route ABOVE products */}
          <Route
            path="/products/:id"
            element={
              isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />
            }
          />

          {/* Products list */}
          <Route
            path="/products"
            element={
              isLoggedIn ? <Products /> : <Navigate to="/login" />
            }
          />

          {/* Cart */}
          <Route
            path="/cart"
            element={
              isLoggedIn ? <Cart /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default AppWrapper;