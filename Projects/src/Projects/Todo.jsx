import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const add = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const remove = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button onClick={add}>Add</button>

      <ul>
        {todos.map((tasks, index) => (
          <li key={index}>
            {tasks}
            <button onClick={() => remove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
