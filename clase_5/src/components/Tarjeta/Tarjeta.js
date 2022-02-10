import React from "react";

function Tarjeta({ id, nombre, completado, cambiarCheck }) {
  const handleChange = (event) => {
    const valorCheck = event.target.checked;
    console.log(`object`, valorCheck);
    cambiarCheck(id, valorCheck);
  };

  return (
    <div className="tarjeta">
      <input
        type="checkbox"
        id={`list${id}`}
        className="checkbox"
        onChange={handleChange}
      />
      <label className="checkLabel" htmlFor={`list${id}`}>
        {nombre}
      </label>
    </div>
  );
}

export default Tarjeta;
