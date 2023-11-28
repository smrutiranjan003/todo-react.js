import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState(""); // State to hold the input task

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (task.trim() !== "") {
      setTodo([...todo, task]); // Add the new task to the todo array
      setTask(""); // Clear the input field
    }
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1); // Remove the task at the specified index
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-body card shadow p-3 mb-5 bg-body rounded w-50">
      <h2 className="text-center mb-3">Todo-List using React.js 👨🏻‍💻</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            placeholder="Enter Your Task"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </form>
      <div className="todo-list">
        <ul>
          {todo.map((task, index) => (
            <li
              key={index}
              
            >
              {task}
              <span
                className="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
