import React, { useState } from "react";
import Item from "./Item";

import Button from "@material-ui/core/Button";

function ListOfTodos(props) {
  const { todos, clearItems, deleteItem, handleEdit } = props;

  return (
    <div style={{ marginTop: "40px" }}>
      <ul className="todoLists" style={{ listStyle: "none", padding: "0" }}>
        {Object.keys(todos).map(uuid => (
          <Item
            key={uuid}
            item={{
              ...todos[uuid],
              uuid,
            }}
          />
        ))}
      </ul>
      {/* todos.length > 0 && (
        <Button onClick={clearItems} variant="contained" color="secondary">
          Clear List Items
        </Button>
          ) */}
    </div>
  );
}

export default ListOfTodos;
