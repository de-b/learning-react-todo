import React from "react";

import "./App.css";
import AppBar from "./components/AppBar";
import ToDo from "./views/ToDo";

function App() {
  return (
    <>
      <AppBar />
      <ToDo />
    </>
  );
}

export default App;
