import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
    marginBottom: "20px",
  },
  mt: {
    marginTop: "15px",
  },
}));
const LoginForm = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <h2>Login Form</h2>
      <form className="loginForm" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Username"
          className={classes.fullWidth}
        />
        <TextField
          id="standard-basic"
          label="Password"
          className={classes.fullWidth}
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Typography className={classes.mt}>
          <Link href="#" onClick={preventDefault}>
            Forgot Password
          </Link>
          <Link
            href="#"
            onClick={preventDefault}
            style={{ marginLeft: "15px" }}
          >
            Register
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default LoginForm;
