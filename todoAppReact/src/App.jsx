import { useState } from "react";
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";

const initialStateTareas = [
  {
    id: 1,
    title : "todo#01",
    description : "description#01",
    state : false,
    priority : false
  },
  {
    id: 2,
    title : "todo#02",
    description : "description#02",
    state : false,
    priority : false
  },
  {
    id: 3,
    title : "todo#03",
    description : "description#03",
    state : false,
    priority : false
  }
]


const App = () => {

  const [tareas,setTareas] = useState(initialStateTareas);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  };

  const eliminarTarea = (id) => {
    const nuevoArreglo = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevoArreglo);
  };

  const actualizarTarea = (id) => {
    const nuevoArreglo = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.state = !tarea.state;
      }
      return tarea;
    })
    setTareas(nuevoArreglo);
  };

  const ordenarTareas = (tareas) => {
    return tareas.sort((a,b)=>{
      if(a.priority === b.priority) return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;
    })
  }

  return (
    <>
    <h1>Todo App con React</h1>
      <Formulario addTarea={agregarTarea}/>
      <Tareas tareas={ordenarTareas(tareas)} deleteTarea={eliminarTarea} updateTarea={actualizarTarea}/>
    </>
  );
};
export default App;
