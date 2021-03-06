import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ToDoItem = ({ id, task, deleteItem, handleEdit }) => {
  return (
    <li>
      <span>{task}</span>
      <span>
        <DeleteIcon onClick={deleteItem} color="secondary" />
        <EditIcon onClick={handleEdit} color="primary" />
      </span>
    </li>
  );
};

export default ToDoItem;
