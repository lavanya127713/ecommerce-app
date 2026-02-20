import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get("/products").then(res => {
      const found = res.data.find(p => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  const addToCart = async () => {
    await API.post("/cart", product);
    alert("Added to cart!");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail-container">
      <img src={product.image} alt={product.name} className="detail-img" />

      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;