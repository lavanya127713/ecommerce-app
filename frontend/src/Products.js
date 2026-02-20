import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./api";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/products").then(res => {
      setProducts(res.data || []);
    });
  }, []);

  return (
    <div className="products-grid">
      {products.map(product => (
        <div
          className="card"
          key={product.id}
          onClick={() => navigate(`/products/${product.id}`)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-img"
          />

          <h3>{product.name}</h3>

          <p>
            {product.description
              ? product.description.substring(0, 60) + "..."
              : "No description available"}
          </p>

          <p><strong>₹{product.price}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default Products;