import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle login logic here (e.g., sending data to the server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="content-login">

      <input className="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="pass"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="botonlogin">Login</button>
      
      </div>
    </form>
  );
};

export default Login;
