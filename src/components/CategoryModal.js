import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function CategoryModal({ category, onCancel, onSubmit }) {
  const handleCancel = e => {
    e.preventDefault();
    if (onCancel) onCancel();
  };

  const [addMode, setAddMode] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!category) {
      setAddMode(true);
      setName("");
      setDescription("");
      return;
    }

    setAddMode(false);
    setName(category.name);
    setDescription(category.description);
  }, [category]);

  const handleChange = setFn => e => {
    e.preventDefault();
    setFn(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({
        name,
        description,
      });
    }
  };

  return (
    <Dialog
      open
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {addMode ? "New Category" : "Edit Category"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please enter name and description for category
        </DialogContentText>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              autoFocus
              fullWidth
              value={name}
              onChange={handleChange(setName)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              multiline
              fullWidth
              value={description}
              onChange={handleChange(setDescription)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
