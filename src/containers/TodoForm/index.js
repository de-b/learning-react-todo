import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./TodoForm";
import { database } from "../../firebase";

// this function will return same uuid if item exists
const getItemUuid = item => {
  if (item) {
    return item.uuid;
  }
  return uuidv4();
};

/**
 * expected itemToEdit = { id, name, completed }
 * onDone is function
 *
 * These props value type can be set using `prop-types`. Please read further on prop-types
 *
 */
const TodoFormContainer = ({ categoryId, itemToEdit, onDone }) => {
  const [initialValue, setInitialValue] = useState("");

  // on form is submitted this component saves data to firebase
  // If there is any itemToEdit then it will update current item. ie does not generate new uuid
  const handleSave = itemName => {
    const uuid = getItemUuid(itemToEdit);

    database.ref(`/items/${categoryId}/${uuid}`).set({
      name: itemName,
      completed: false,
    });

    // onDone props exists then invoke the onDone function
    if (onDone) {
      onDone();
    }
  };

  // This effect triggers if itemToEdit change.
  // i.e When you click edit icon on list.. then it change itemToEdit in view
  // The same id is passed here then this effect triggers which change value to edit
  // Value is then passed on to the actual form
  useEffect(() => {
    // itemToEdit is null at the begining so should check if it exists
    if (itemToEdit) {
      setInitialValue(itemToEdit.name);
    } else {
      setInitialValue(""); // initialValue to empty string if there is nothing to edit
    }
  }, [itemToEdit]);

  return <TodoForm onSubmit={handleSave} initialValue={initialValue} />;
};

export default TodoFormContainer;
