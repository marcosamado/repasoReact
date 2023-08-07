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

  return (
    <>
    <h1>Todo App con React</h1>
      <Formulario />
      <Tareas tareas={tareas}/>
    </>
  );
};
export default App;
