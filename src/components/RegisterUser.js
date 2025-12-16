import { useState } from "react";
import { registerUser } from "../../scr/services/api";

export default function RegisterUser() {
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser({ name, pin });
    alert(result.message || "User added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register User</h2>

      <input 
        type="text" 
        placeholder="Name" 
        onChange={(e) => setName(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="PIN / QR Code" 
        onChange={(e) => setPin(e.target.value)} 
      />

      <button type="submit">Register</button>
    </form>
  );
}
