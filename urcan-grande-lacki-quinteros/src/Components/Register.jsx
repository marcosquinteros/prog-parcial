import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

const cargarNombre = (e) => {
    const value = e.target.value;
    console.log(value);
    setNombre(value);
};

const cargarApellido = (e) => {
    const value = e.target.value;
    console.log(value);
    setApellido(value);
};

const cargarEmail = (e) => {
    const value = e.target.value;
    console.log(value);
    setEmail(value);
};

const cargarContraseña = (e) => {
    const value = e.target.value;
    console.log(value);
    setContraseña(value);
};

const guardarCLick = () => {
    console.log(
    "Nombre:", nombre,
    "Apellido:", apellido,
    "E-mail:", email,
    "Contraseña:", contraseña
    );
};

return (
    <div className="content-login-form">
        <h3>REGISTRARSE</h3>

        <div>
            <form className="content-formulario">
            <div>
                <div className="nombre-div">
                <p>Nombre: </p>
                <input
                type="text"
                id="nombre"
                className="nombre"
                placeholder="Nombre"
                autoComplete="off"
                value={nombre}
                onChange={cargarNombre}
                ></input>
                </div>
                
                <div className="apellido-div">
                <p>Apellido: </p>
                <input
                type="text"
                id="apellido"
                className="apellido"
                placeholder="Apellido"
                autoComplete="off"
                value={apellido}
                onChange={cargarApellido}
                ></input>
            </div>
            
            </div>
            <div className="email-div">
            <p>E-mail: </p>
            <input
                type="text"
                id="email"
                className="email"
                placeholder="E-mail"
                autoComplete="off"
                value={email}
                onChange={cargarEmail}
            ></input>
            </div>
            
            <div className="pass-div">
            <p>Contraseña: </p>
            <input
                type="password"
                id="contraseña"
                className="pass"
                placeholder="Contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={cargarContraseña}
            ></input>
            </div>
            
            <div className="passRepeat-div">
            <p>Repetir Contraseña: </p>
            <input
                type="password"
                id="contraseña"
                className="contraseña"
                placeholder="Contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={cargarContraseña}
            ></input>
            </div>
            
            <div className="terminos">
            <label for="chechbox" className="checkbox">
                <input
                type="checkbox">
                </input>
                <span> Acepto los <Link to={props.pathError}>terminos y condiciones</Link></span>
            </label>
            </div>
            <button onClick={guardarCLick} className="botonguardar">Guardar</button>
            </form>
        </div>
    </div>
);
};

export default Register;

