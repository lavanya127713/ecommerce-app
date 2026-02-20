import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/register", { username, password });
      alert("Registered Successfully");
      navigate("/login");
    } catch {
      alert("User already exists");
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;