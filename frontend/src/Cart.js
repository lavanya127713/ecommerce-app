import { useEffect, useState } from "react";
import API from "./api";

function Cart() {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    API.get("/cart").then(res => setCart(res.data));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (id) => {
    await API.delete(`/cart/${id}`);
    loadCart();
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;