import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("data"));

  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <main>
      <div className="home-container">
        <h1>Tus Datos Personales</h1>
        <div className="data-list">
          <div className="data-item">
            <span>Nombres:</span>
            <p>{data.name}</p>
          </div>
          <div className="data-item">
            <span>Fecha de Nacimiento:</span>
            <p>{data.date}</p>
          </div>
          <div className="data-item">
            <span>Correo Electrónico:</span>
            <p>{data.email}</p>
          </div>
          {/* Puedes omitir mostrar la contraseña por razones de seguridad */}
        </div>
        <button onClick={handleClick}>Salir y Borrar Datos</button>
      </div>
    </main>
  );
};

export default Home;
