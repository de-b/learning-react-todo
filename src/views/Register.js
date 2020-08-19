import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
    marginBottom: "20px",
  },
  mt: {
    marginTop: "15px",
  },
}));

const Register = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box m={3}>
        <Card style={{ padding: "25px" }}>
          <h2>Register</h2>
          <form className="loginForm" noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Full Name"
              className={classes.fullWidth}
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              type="email"
              className={classes.fullWidth}
            />
            <TextField
              id="standard-basic"
              label="Username"
              className={classes.fullWidth}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              className={classes.fullWidth}
            />
            <TextField
              id="standard-basic"
              label="Confirm Password"
              type="password"
              className={classes.fullWidth}
            />
            <Button variant="contained" color="primary">
              Register
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default Register;
