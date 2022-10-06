import React, { useEffect, useState } from "react";

const Clock = () => {
  const [user, setUser] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Mr. Blue",
    apellidos: "Gru",
  });

  useEffect(() => {
    const intervalAge = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalAge);
    };
  });
  const tick = () => {
    return setUser({
      fecha: user.fecha,
      edad: user.edad + 1,
      nombre: user.nombre,
      apellidos: user.apellidos,
    });
  };

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
