import Tarea from "./Tarea";

const Tareas = ({tareas}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul>
                {tareas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea}/>
                ))}
            </ul>
        </div>
    )
}

export default Tareas;