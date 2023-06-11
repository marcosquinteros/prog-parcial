import React from "react";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Contenido from "./Components/Contenido";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="container">
      <header className="header">
        <Title text="Los del espacio" />
      </header>
      <nav className="menu">
        <Menu />
      </nav>
      <div className="content-sidebar-wrapper">
        <main className="content">
          <Contenido />
        </main>
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
