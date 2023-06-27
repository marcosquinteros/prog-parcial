import React from "react";
import Register from "../Components/Register";

const register = () => {
  return (
    <div className="body-register">
      <div className="w-100">
        <div className="content-sidebar-wrapper">
          <main className="content-register">
          <Register/>
          <img
              src="https://img.freepik.com/fotos-premium/poster-estacion-espacial-estacion-espacial_927978-448.jpg?w=360"
              alt="image"
              className="imagen-register"
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default register;
