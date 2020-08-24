import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { database } from "../../firebase";

const ToDoItem = ({ item, onEditItem }) => {
  const { uuid, name } = item;

  const handleDelete = uuid => e => {
    e.preventDefault();
    database.ref(`shopping/${uuid}`).set(null);
  };

  const handleEdit = uuid => e => {
    e.preventDefault();

    if (onEditItem) {
      onEditItem(item);
    }
  };

  return (
    <li>
      <span>{name}</span>
      <span>
        <DeleteIcon onClick={handleDelete(uuid)} color="secondary" />
        <EditIcon onClick={handleEdit(uuid)} color="primary" />
      </span>
    </li>
  );
};

export default ToDoItem;
