import "../styles/ToDo.css";

const ToDo = ({ tarea, id, handleEliminar, handleCheck, todo }) => {
  return (
    <div
      class={`alert w-75 d-flex justify-content-between align-items-center ${
        todo.completed ? "alert-success" : "alert-warning"
      }`}
    >
      <div>
        <p className={`fs-5 ${todo.completed ? "completed" : ""}`}>
          <span>{id}</span> - {tarea}
        </p>
      </div>
      <div>
        <button onClick={() => handleCheck(id)} class="btn btn-primary">
          Check
        </button>
        <button onClick={() => handleEliminar(id)} class="btn btn-danger mx-1">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ToDo;
