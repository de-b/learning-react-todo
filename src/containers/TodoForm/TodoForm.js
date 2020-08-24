import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
    marginBottom: "20px",
  },
}));

const ToDoForm = ({ initalValue, onSubmit }) => {
  const classes = useStyles();
  const [itemName, setItemName] = useState(initalValue || "");

  const handleChange = e => {
    setItemName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(itemName);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        className={classes.fullWidth}
        id="standard-basic"
        label="Add Todo item"
        value={itemName}
        onChange={handleChange}
        autoFocus
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ToDoForm;
