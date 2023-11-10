import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;

  const [dataInputs, setDataInputs] = useState({
    name: "",
    lastName: "", // Agregado el campo de apellidos
    date: "",
    email: "",
    password: "",
    confirmPassword: "", // Agregado el campo de confirmar contraseña
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataInputs({ ...dataInputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataInputs);
    if (!regex.test(dataInputs.password)) {
      alert(
        "la contraseña debe contener minimo 8 caracteres, maximo 15, al menos un digito numerico, al menos un simbolo, al menos una letra en mayuscula"
      );
    } else {
      localStorage.setItem("data", JSON.stringify(dataInputs));
      alert("datos almacenados, ya puedes iniciar sesion");
    }
  };



  return (
    <main>
      <div className="form-card">
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Nombres"
              value={dataInputs.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellidos</label>
            <input
              type="text"
              required
              name="lastName"
              id="lastName"
              placeholder="Apellidos"
              value={dataInputs.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Fecha de nacimiento</label>
            <input
              type="date"
              required
              name="date"
              id="date"
              value={dataInputs.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              value={dataInputs.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              value={dataInputs.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              required
              name="confirmPassword"
              id="confirmPassword"
              value={dataInputs.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
