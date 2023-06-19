import Contenido from "../Components/Contenido";
import Sidebar from "../Components/Sidebar";

const Inicio = () => {
  return (
    <div>
      <div className="w-100">
        <div className="">
          <Sidebar />
          <main className="content">
            <Contenido />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
