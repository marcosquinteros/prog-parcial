import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    axios
      .get("http://localhost:3001/registerData", {
        params: {
          email: loginData.email,
          password: loginData.password,
        },
      })
      .then((response) => {
        const usuarios = response.data;

        if (usuarios.length > 0) {
          // Usuario encontrado
          mostrarAlerta("success", "Inicio de sesión exitoso");
        } else {
          // Usuario no encontrado
          mostrarAlerta("error", "Credenciales inválidas");
        }
      })
      .catch((error) => {
        console.error(error);
        mostrarAlerta("error", "Error en el inicio de sesión");
      });
  };

  const mostrarAlerta = (icon, message) => {
    Swal.fire({
      icon: icon,
      text: message,
      confirmButtonText: "Aceptar",
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
