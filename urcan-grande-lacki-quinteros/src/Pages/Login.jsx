import React from "react";
import Login from "../Components/Login";

const Loginp = () => {
  return (
    <div>
      <div className="w-100">
        <div className="content-sidebar-wrapper">
          <main className="content-login">
            <img
              src="https://cdn.openart.ai/uploads/image_JUna77g__1686848397360_512.webp"
              alt="image"
              className="imagen-login"
            />
            <Login pathRegister="/Register" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Loginp;
