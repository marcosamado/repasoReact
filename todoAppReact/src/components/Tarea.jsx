const Tarea = ({tarea}) => {

    const {title,description,state,priority} = tarea;

    return (
        <li>
            {title}
        </li>
    )
}

export default Tarea;