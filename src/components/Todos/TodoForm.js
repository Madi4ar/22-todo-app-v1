import { useState } from "react";

function TodoForm() {
  const [data, setData] = useState({ todo: "" });

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter new todo"
          value={data.todo}
          onChange={(e) => handleInputChange(e, "todo")}
        />
        <button type="submit">Submit</button>
      </div>
    </>
  );
}

export default TodoForm;
