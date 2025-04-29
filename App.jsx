import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgregarTarea from './components/AgregarTarea'
import { useState, useEffect } from 'react'
import './App.css'
import AgregarTarea from './components/AgregarTarea'
import ListaTareas from './components/ListaTareas'

function App() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    let nuevaTarea = {
      id: Date.now(),
      tarea,
      Finalizada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tar) => tar.id !== id));
  };

  const chequearTarea = (id) => {
    setTareas(
      tareas.map((tar) =>
        tar.id === id ? { ...tar, Finalizada: !tar.Finalizada } : tar
      )
    );
  };

  return (
    <div>
      <h1>Agregar Tarea</h1>
      <AgregarTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        chequearTarea={chequearTarea}
      />
    </div>
  );
}

export default App;
