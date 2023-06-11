import React from "react";
import Contenido from "../Components/Contenido";
import Sidebar from "../Components/Sidebar";

const Inicio = () => {
  return (
    <div>
      <div className="w-100">
        <div className="content-sidebar-wrapper">
          <main className="content">
            <Contenido />
          </main>
          <aside className="sidebar">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
