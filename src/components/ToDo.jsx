import "../styles/ToDo.css";

const ToDo = ({ tarea, id, handleEliminar, handleCheck, todo }) => {
  return (
    <div>
      <p className={todo.completed ? "completed" : ""}>
        <span>{id}</span> - {tarea}
      </p>
      <button onClick={() => handleCheck(id)}>Check</button>
      <button onClick={() => handleEliminar(id)}>Eliminar</button>
    </div>
  );
};

export default ToDo;
