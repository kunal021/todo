import { useState, useEffect } from "react";
import Create from "./Create.jsx";
import axios from "axios";
import checkbox from "../public/checkbox.png";
import x from "../public/x-mark.png";
import checkmark from "../public/check-mark.png";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, [todos]);

  const handleDone = (id) => {
    axios
      .put("http://localhost:3000/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="todo-show">
        <h1 className="header">TODO LIST</h1>
        <Create />
        {todos.length == 0 ? (
          <div>
            <h2>NO TODOS</h2>
          </div>
        ) : (
          todos.map((todo, idx) => (
            <div className={todo.done ? "todo done" : "todo"} key={idx}>
              <a onClick={() => handleDone(todo._id)}>
                <img src={todo.done ? checkmark : checkbox} />
              </a>
              {todo.task}
              <a onClick={() => handleDelete(todo._id)}>
                <img src={x} />
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
