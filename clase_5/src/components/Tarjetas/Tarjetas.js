import React from "react";
import Tarjeta from "../Tarjeta/Tarjeta";

function Tarjetas({ tareas, cambiarCheck }) {
  return (
    <div className="tarjetas">
      {tareas.map((tarea, i) => {
        return (
          <Tarjeta
            key={tarea.id}
            {...tarea}
            cambiarCheck={cambiarCheck}
          ></Tarjeta>
        );
      })}
    </div>
  );
}

export default Tarjetas;
