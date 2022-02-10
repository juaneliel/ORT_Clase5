import React, { useState } from "react";
import Agregar from "../Agregar/Agregar";
import Tarjetas from "../Tarjetas/Tarjetas";
import { devolverIdNuevo } from "../../util/util";

const Contenido = () => {
  let tareasIniciales = [
    { id: 1, nombre: "Tarea uno", completado: false },
    { id: 2, nombre: "Tarea dos", completado: false },
    { id: 3, nombre: "Tarea tres", completado: false },
  ];
  const [tareas, setTareas] = useState(tareasIniciales);

  const cambiarCheck = (id, completado) => {
    const tareasNuevo = [...tareas];
    const tareaModificar = tareasNuevo.find((t) => {
      return t.id == id;
    });
    tareaModificar.completado = completado;
    setTareas(tareasNuevo);
    console.log(`id,completado`, id, completado);
  };

  const agregarTareaNueva = (nombreTarea) => {
    const idNuevo = devolverIdNuevo(tareas);

    const tareaNueva = { id: idNuevo, nombre: nombreTarea, completado: false };
    const nuevaLista = [...tareas, tareaNueva];
    setTareas(nuevaLista);
    console.log(`nombreTarea`, nombreTarea);
  };

  return (
    <div className="contenido">
      <Agregar agregarTareaNueva={agregarTareaNueva}></Agregar>
      <Tarjetas tareas={tareas} cambiarCheck={cambiarCheck}></Tarjetas>
    </div>
  );
};

export default Contenido;
