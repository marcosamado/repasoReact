const Tareas = ({tareas}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Tareas</h2>
            <ul>
                {tareas.map(tarea => (
                    <li key={tarea.id}>{tarea.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tareas;