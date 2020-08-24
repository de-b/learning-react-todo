import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ToDoItem = ({ item, onDeleteItem, onEditItem }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>
        <DeleteIcon onClick={onDeleteItem} color="secondary" />
        <EditIcon onClick={onEditItem} color="primary" />
      </span>
    </li>
  );
};

export default ToDoItem;
