import React from "react";
import Item from "./Item";

function ListOfTodos({ todos }) {
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
    </div>
  );
}

export default ListOfTodos;
