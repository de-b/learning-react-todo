import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ListOfTodos from "./ListOfTodos";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
const mainTodos = [
  {
    category: "shopping",
    id: uuidv4(),
    completed: false,
    task: "buy and eggs",
  },
  {
    category: "shopping",
    id: uuidv4(),
    completed: false,
    task: "buy and oranges test",
  },
];

const ToDo = () => {
  const [todos, setTodos] = useState(mainTodos);
  const [inputText, setInputText] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "")
      return handleAlert({
        type: "danger",
        text: "Please add something to the task",
      });
    setTodos([
      ...todos,
      {
        category: "shopping",
        id: uuidv4(),
        task: inputText,
        completed: false,
      },
    ]);
    setInputText("");
    handleAlert({ type: "success", text: "successfully added" });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };

  const clearItems = () => {
    setTodos([]);
    handleAlert({ type: "danger", text: "all items deleted" });
  };

  const deleteItem = (id) => {
    let temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
    handleAlert({ type: "danger", text: "item deleted" });
  };

  const editItem = (id) => {
    //console.log(id);
    const singleItem = todos.find((item) => item.id === id);
    console.log(singleItem);
  };

  return (
    <Container maxWidth="sm">
      <Box m={3}>
        {alert.show && <Alert alert={alert} />}
        <Card style={{ padding: "25px" }}>
          <Typography variant="h5" color="initial">
            Your Todo lists
          </Typography>
          <ToDoForm
            inputText={inputText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ListOfTodos
            todos={todos}
            clearItems={clearItems}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </Card>
      </Box>
    </Container>
  );
};

export default ToDo;
