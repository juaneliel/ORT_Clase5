import React, { useRef } from "react";

function Agregar({ agregarTareaNueva }) {
  const refInputNombre = useRef();

  const handleClick = (e) => {
    const nombreTarea = refInputNombre.current.value;
    agregarTareaNueva(nombreTarea);
  };

  const hanlerChange = (e) => {
    console.log(`object`, e.target.value);
  };

  return (
    <div className="agregar">
      <label htmlFor="txtAgregar">Agregar:</label>
      <input
        ref={refInputNombre}
        type="text"
        name="txtAgregar"
        id="txtAgregar"
        onChange={hanlerChange}
      />
      <input type="button" value="Agregar" onClick={handleClick} />
    </div>
  );
}

export default Agregar;
