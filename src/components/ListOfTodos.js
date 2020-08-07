import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

import Button from "@material-ui/core/Button";

function ListOfTodos(props) {
  const { todos, clearItems, deleteItem, handleEdit } = props;

  return (
    <div style={{ marginTop: "40px" }}>
      <ul className="todoLists" style={{ listStyle: "none", padding: "0" }}>
        {todos.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            task={item.task}
            deleteItem={() => deleteItem(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <Button onClick={clearItems} variant="contained" color="secondary">
          Clear List Items
        </Button>
      )}
    </div>
  );
}

export default ListOfTodos;
