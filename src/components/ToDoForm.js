import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
    marginBottom: "20px",
  },
}));

function ToDoForm({ inputText, handleChange, handleSubmit }) {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        className={classes.fullWidth}
        id="standard-basic"
        label="Add Todo item"
        value={inputText}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default ToDoForm;
