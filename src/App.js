import React, { useState } from "react";

import "./App.css";
import AppBar from "./components/AppBar";
import ToDo from "./views/ToDo";
import LoginForm from "./views/LoginForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";

function App() {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/" exact component={LoginForm}>
          <LoginForm />
        </Route>
        <Route path="/forgot-password" exact component={ForgotPassword}>
          <ForgotPassword />
        </Route>
        <Route path="/register" exact component={Register}>
          <Register />
        </Route>
        {userLogin && (
          <Route path="/todo" exact component={ToDo}>
            <ToDo />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
