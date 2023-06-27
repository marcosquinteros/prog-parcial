import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Registro = (props) => {
const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post('http://localhost:3001/registerData', formData)
    .then((response) => {
        console.log(response.data);
        alert('Registro exitoso');

        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        });
        document.getElementById('checkbox').checked = false;
    })
    .catch((error) => {
        console.error(error);
        alert('Error en el registro');
    });
};

return (
    <div className='content-login-form'>
        <h3>REGISTRO</h3>
        
        <div>            
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="nombre-div">
                    <p>Nombre/s: </p>
                    <input
                    type="text"
                    className="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    />
                    </div>
                </div>
                <div>
                    <div className="apellido-div">
                    <p>Apellido/s: </p>
                    <input
                    type="text"
                    className="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required
                    />
                    </div>
                </div>

                <div>
                    <div className="email-div">
                    <p>Correo Electrónico </p>
                    <input
                    type="email"
                    className="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo Electrónico"
                    required
                    />
                    </div>
                </div>

                <div>
                    <div className="pass-div">
                    <p>Contraseña: </p>
                    <input
                    type="password"
                    className="pass"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required
                    />
                    </div>
                </div>

                <div className="terminos">
                <label for="chechbox" className="checkbox">
                    <input
                    id='checkbox'
                    type="checkbox">
                    </input>
                    <span> Acepto los <Link to={props.pathError}>terminos y condiciones</Link></span>
                </label>
            </div>                
                <button type="submit" className="botonguardar">Enviar</button>
            </form>
        </div>
    </div>
);
};

export default Registro;

// const Register = (props) => {
//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");
//     const [email, setEmail] = useState("");
//     const [contraseña, setContraseña] = useState("");

// const cargarNombre = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setNombre(value);
// };

// const cargarApellido = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setApellido(value);
// };

// const cargarEmail = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setEmail(value);
// };

// const cargarContraseña = (e) => {
//     const value = e.target.value;
//     console.log(value);
//     setContraseña(value);
// };

// const guardarCLick = () => {
//     console.log(
//     "Nombre:", nombre,
//     "Apellido:", apellido,
//     "E-mail:", email,
//     "Contraseña:", contraseña
//     );
// };

// return (
//     <div className="content-login-form">
//         <h3>REGISTRARSE</h3>

//         <div>
//             <form className="content-formulario">
//             <div>
//                 <div className="nombre-div">
//                 <p>Nombre: </p>
//                 <input
//                 type="text"
//                 id="nombre"
//                 className="nombre"
//                 placeholder="Nombre"
//                 autoComplete="off"
//                 value={nombre}
//                 onChange={cargarNombre}
//                 ></input>
//                 </div>
                
//                 <div className="apellido-div">
//                 <p>Apellido: </p>
//                 <input
//                 type="text"
//                 id="apellido"
//                 className="apellido"
//                 placeholder="Apellido"
//                 autoComplete="off"
//                 value={apellido}
//                 onChange={cargarApellido}
//                 ></input>
//             </div>
            
//             </div>
//             <div className="email-div">
//             <p>E-mail: </p>
//             <input
//                 type="text"
//                 id="email"
//                 className="email"
//                 placeholder="E-mail"
//                 autoComplete="off"
//                 value={email}
//                 onChange={cargarEmail}
//             ></input>
//             </div>
            
//             <div className="pass-div">
//             <p>Contraseña: </p>
//             <input
//                 type="password"
//                 id="contraseña"
//                 className="pass"
//                 placeholder="Contraseña"
//                 autoComplete="off"
//                 value={contraseña}
//                 onChange={cargarContraseña}
//             ></input>
//             </div>
            
//             <div className="passRepeat-div">
//             <p>Repetir Contraseña: </p>
//             <input
//                 type="password"
//                 id="contraseña"
//                 className="contraseña"
//                 placeholder="Contraseña"
//                 autoComplete="off"
//                 value={contraseña}
//                 onChange={cargarContraseña}
//             ></input>
//             </div>
            
//             <div className="terminos">
//             <label for="chechbox" className="checkbox">
//                 <input
//                 type="checkbox">
//                 </input>
//                 <span> Acepto los <Link to={props.pathError}>terminos y condiciones</Link></span>
//             </label>
//             </div>
//             <button onClick={guardarCLick} className="botonguardar">Guardar</button>
//             </form>
//         </div>
//     </div>
// );
// };

// export default Register;

