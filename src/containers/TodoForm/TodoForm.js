import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
    marginBottom: "20px",
  },
}));

const ToDoForm = ({ initialValue, onSubmit }) => {
  const classes = useStyles();
  const [itemName, setItemName] = useState("");

  const handleChange = e => {
    setItemName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(itemName);
    }
  };

  useEffect(() => {
    setItemName(initialValue || "");
  }, [initialValue]);

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
