import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
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
    <Container maxWidth="sm">
      <Box m={3}>
        <Card style={{ padding: "25px" }}>
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
                <Link to="/forgot-password">Forgot Password</Link>
                <Link to="/register" style={{ marginLeft: "15px" }}>
                  Register
                </Link>
              </Typography>
            </form>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginForm;
