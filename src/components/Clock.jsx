import React, { useEffect, useState } from "react";

const Clock = () => {
  const [user, setUser] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Mr. Blue",
    apellidos: "Gru",
  });

  const tick = () => {
    let edad = user.edad + 1;
    setUser({
      ...user,
      fecha: new Date(),
      edad,
    });
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  return (
    <div>
      <h2>Hora Actual: {user.fecha.toLocaleTimeString()}</h2>
      <p>
        {user.nombre} {user.apellidos}
      </p>
      <p>Edad: {user.edad}</p>
    </div>
  );
};

export default Clock;
