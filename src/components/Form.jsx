import { useState, useEffect } from "react";
import ToDo from "./ToDo";

const Form = () => {
  const [tarea, setTarea] = useState();
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("todos");
  const [completedTodo, setCompletedTodo] = useState([]);

  const recibirTarea = (e) => {
    setTarea(e.target.value);
  };

  function addTarea(e) {
    setTodo([
      ...todo,
      {
        todo: tarea,
        completed: false
      }
    ]);
    setTarea("");
    e.preventDefault();
  }

  const handleEliminar = (id) => {
    setTodo(todo.filter((e, i) => id !== i));
  };

  const handleCheck = (id) => {
    setTodo(
      todo.map((el, i) => {
        if (i === id) {
          return {
            ...el,
            completed: !el.completed
          };
        }
        return el;
      })
    );
  };

  const handlerStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    switch (status) {
      case "realizados":
        setCompletedTodo(todo.filter((el) => el.completed === true));
        break;
      case "por hacer":
        setCompletedTodo(todo.filter((el) => el.completed === false));
        break;
      default:
        setCompletedTodo(todo);
        break;
    }
  }, [status, todo]);
  return (
    <>
      <form>
        <input
          value={tarea}
          type="text"
          placeholder="Que vas a hacer"
          onChange={recibirTarea}
        />
        <button onClick={addTarea}>+</button>
        <select onChange={handlerStatus} name="select">
          <option value="todos">Todos</option>
          <option value="realizados">Realizados</option>
          <option value="por hacer">Por Hacer</option>
        </select>
      </form>
      {completedTodo.map((t, i) => (
        <ToDo
          tarea={t.todo}
          id={i}
          key={i}
          handleEliminar={handleEliminar}
          handleCheck={handleCheck}
          todo={t}
        />
      ))}
    </>
  );
};

export default Form;
