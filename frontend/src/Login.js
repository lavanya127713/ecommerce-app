import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./api";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await API.post("/login", { username, password });
      setIsLoggedIn(true);
      navigate("/products");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;