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

function ToDoForm() {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <TextField
        className={classes.fullWidth}
        id="standard-basic"
        label="Add Todo item"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default ToDoForm;
