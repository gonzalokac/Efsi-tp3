function Tarea({ tarea, eliminarTarea, chequearTarea }) {
    return (
      <li>
        <span
          onClick={() => chequearTarea(tarea.id)}
          className={tarea.Finalizada ? "line-through text-gray-500" : ""}
        >
          {tarea.tarea}
        </span>
        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
      </li>
    );
  }
  
  export default Tarea;
  