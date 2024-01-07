import { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:3000/", { task: task })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTask("");
  };
  return (
    <>
      <form className="todo-create">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={handleAdd}>
          ADD
        </button>
      </form>
    </>
  );
}

export default Create;
