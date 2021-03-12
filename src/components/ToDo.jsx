import "../styles/ToDo.css";

const ToDo = ({ tarea, id, handleEliminar, handleCheck, todo }) => {
  return (
    <div
      className={`alert container d-flex justify-content-between align-items-center ${
        todo.completed ? "alert-success" : "alert-warning"
      }`}
    >
      <div>
        <p className={`fs-5 ${todo.completed ? "completed" : ""}`}>{tarea}</p>
      </div>
      <div>
        <button
          onClick={() => handleCheck(id)}
          className="btn btn-primary btn-sm"
        >
          Check
        </button>
        <button
          onClick={() => handleEliminar(id)}
          className="btn btn-danger btn-sm mx-md-1"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ToDo;
