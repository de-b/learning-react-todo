import React, { useState, Fragment, cloneElement } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ConfirmDialog({ title, message, children, onConfirm }) {
  const [open, setOpen] = useState(false);

  const handleToggleDialog = openState => () => {
    setOpen(openState);
  };

  const handleConfirmation = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Fragment>
      {cloneElement(children, { onClick: handleToggleDialog(true) })}
      <Dialog
        open={open}
        onClose={handleToggleDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog(false)} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmation} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
