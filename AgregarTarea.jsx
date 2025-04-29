import { useState } from 'react'

function AgregarTarea({ agregarTarea }) {
  const [descripcionTarea, setDescripcionTarea] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (descripcionTarea.trim() !== '') {
      agregarTarea(descripcionTarea);
      setDescripcionTarea("");
    } else {
      alert('Ingresá una tarea para seguir');
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Ingresa tarea"
        value={descripcionTarea}
        onChange={(e) => setDescripcionTarea(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default AgregarTarea;
