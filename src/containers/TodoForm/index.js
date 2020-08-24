import React from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./TodoForm";
import { database } from "../../firebase";

const DEFAULT_CATEGORY = "shopping";

const TodoFormContainer = () => {
  const handleSave = itemName => {
    const uuid = uuidv4();
    database.ref(`${DEFAULT_CATEGORY}/${uuid}`).set({
      name: itemName,
      completed: false,
    });
  };

  return <TodoForm onSubmit={handleSave} initalValue="" />;
};

export default TodoFormContainer;
