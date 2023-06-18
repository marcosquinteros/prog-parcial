import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Create an object representing the login data
    const loginData = {
      email,
      password
    };

    // Make the POST request using axios
    axios.post('http://localhost:3000/loginData', loginData)
      .then(response => {
        console.log('Login data saved:', response.data);
      })
      .catch(error => {
        console.error('Error saving login data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="content-login-form">
        <h3> Login </h3>

        <div className="email-div">
          <p> E-mail </p>
          <input
            className="email"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="pass-div">
          <p> Contraseña </p>
          <input
            className="pass"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="botonlogin">
          Login
        </button>

        <Link to={props.pathRegister}> ¿Queres registrarte? </Link>
      </div>
    </form>
  );
};

export default Login;