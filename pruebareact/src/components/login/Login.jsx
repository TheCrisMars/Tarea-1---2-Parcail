import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [dataInputs, setDataInputs] = useState({
    email: "",
    password: "",
  });
	const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataInputs({ ...dataInputs, [name]: value });
  };

  const handleSubmit = (e) => {
		e.preventDefault();
		if(localStorage.length === 0) {
			return alert("no existen datos almacenados")
		}
		const { email, password } = JSON.parse(localStorage.getItem("data"))
		console.log(email, password)

		if( dataInputs.email == email && dataInputs.password == password) {
			alert("sesion iniciada");
			navigate("/");
		} else {
		  alert("datos incorrectos")
		}
  };

  return (
    <main>
      <div className="form-card">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Correo electronico"
              onChange={handleChange}
              value={dataInputs.email}
            />
          </div>
          <div>
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Contraseña"
              onChange={handleChange}
              value={dataInputs.password}
            />
          </div>
          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
