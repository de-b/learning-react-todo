import React from "react";

import "./App.css";
import AppBar from "./components/AppBar";
import ToDo from "./views/ToDo";
import LoginForm from "./views/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";
import Categories from "./views/Categories";

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Categories} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/category/:id" exact component={ToDo} />
      </Switch>
    </Router>
  );
}

export default App;
