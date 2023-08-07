import { useState } from "react"

const Formulario = () => {


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [state, setState] = useState("pendiente");

    const [tareas, setTareas] = useState({
        title : "",
        description : "",
        state : "pendiente",
        priority : false
    });

    const {title,description,priority,state} = tareas;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,description,priority,state);
    }

const handleChange = (e) => {

    const {name, type, checked, value} = e.target;

    setTareas({
    ...tareas,
    [name] : type === "checkbox" ? checked : value
    // ...tareas, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
};

return (
    <>
        <form onSubmit={handleSubmit} className="form-control mt-5">
            <input
                type="text"
                name="title"
                placeholder="Ingrese Tarea"
                className="form-control mb-3"
                value={title}
                onChange={handleChange}
                // onChange={event => setTareas({...tareas, title: event.target.value})}
            />

            <textarea
                className="form-control mb-3"
                placeholder="Ingrese Descripcion"
                name="description"
                value={description}
                onChange={handleChange}
            // onChange={event => setTareas({...tareas, description: event.target.value})}
            />
            <div className="form-check">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="input-check"
                    checked={priority}
                    onChange={(e)=> setTareas({...tareas, priority: e.target.checked})}
                />
                <label htmlFor="input-check">Dar Prioridad</label>
            </div>

            <select
                className="form-control mb-3"
                name="state"
                value={state}
                onChange={handleChange}
                // onChange={event => setTareas({...tareas, state: event.target.value})}
                >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-success mb-2">Procesar</button>
        </form>
    </>
    )
}

export default Formulario;