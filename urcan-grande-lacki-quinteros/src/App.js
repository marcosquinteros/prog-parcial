import React from "react";
import Title from "./components/Title";
import Footer from "./Components/Footer";
import Menu from "./components/Menu";
import Contenido from "./Components/Contenido";
import Sidebar from "./components/Sidebar";
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
