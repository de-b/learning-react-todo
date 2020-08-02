import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "@material-ui/core/Button";
function ListOfTodos() {
  const [todos, setTodos] = useState([
    {
      category: "shopping",
      todos: {
        id: uuidv4(),
        completed: false,
        tasks: ["buy and eggs", "buy oranges"],
        task: "",
      },
    },
    {
      category: "kitchen",
      todos: {
        id: uuidv4(),
        completed: false,
        tasks: ["make breaky", "clean kitchen"],
        task: "",
      },
    },
  ]);

  return (
    <div style={{ marginTop: "40px" }}>
      <ul className="todoLists" style={{ listStyle: "none", padding: "0" }}>
        {todos.map((item) => (
          <li>{item.todos.tasks}</li>
        ))}
        <li>
          <span>- Buy an egg</span>
          <span>
            <button>Edit</button>
            <button>Delete</button>
          </span>
        </li>
        <li>
          <span>- Buy an oranges</span>
        </li>
      </ul>
      <Button variant="contained" color="secondary">
        Clear List Items
      </Button>
    </div>
  );
}

export default ListOfTodos;
