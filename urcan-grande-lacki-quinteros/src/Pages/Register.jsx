import React from "react";
import { useState, Link} from "react";

const Register = () => {
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
      "Nombre:",
      nombre,
      "Apellido:",
      apellido,
      "E-mail:",
      email,
      "Contraseña:",
      contraseña
    );
  };

  return (
    <div>
      <div>
        <h1>REGISTER</h1>
        <div className="w-100">
          <div className="content-sidebar-wrapper">
            <main className="content">
              <div className="content-nombre">
                <div className="input">
                <label>Nombre: </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  autoComplete="off"
                  value={nombre}
                  onChange={cargarNombre}
                ></input>
                </div>
                <div className="input">
                <label>Apellido: </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Apellido"
                  autoComplete="off"
                  value={apellido}
                 onChange={cargarApellido}
                ></input>
              </div>  
            </div>
              <div className="input">
                <label>E-mail: </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                autoComplete="off"
                value={email}
                onChange={cargarEmail}
              ></input>
              </div>
            <div className="input">
              <label>Contraseña: </label>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="Contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={cargarContraseña}
              ></input>
            </div>
            <div className="input">
              <label>Repetir Contraseña: </label>
              <input
                type="password"
                id="contraseña"
                name="contraseña"
                placeholder="Contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={cargarContraseña}
              ></input>
            </div>
            <div>
              <label for="chechbox" className="checkbox">
                <input
                  type="checkbox">
                </input>
                {/* <span> Acepto los <Link to={props.pathError}>terminos y condiciones</Link></span> */}
              </label>
            </div>
              <button onClick={guardarCLick}>Guardar</button>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
