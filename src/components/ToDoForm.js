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

function ToDoForm({ inputText, handleChange, handleSubmit, editingItem }) {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      {/* {editingItem ? JSON.stringify(editingItem) : "not editing"} */}

      <TextField
        className={classes.fullWidth}
        id="standard-basic"
        label="Add Todo item"
        value={inputText}
        onChange={handleChange}
      />
      {/* <Button variant="outlined">Submit</Button> */}
      <button className="btn">{editingItem ? "Edit" : "Submit"}</button>
    </form>
  );
}

export default ToDoForm;
