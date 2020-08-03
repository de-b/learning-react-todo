import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ListOfTodos from "./ListOfTodos";
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

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputText === "") return;
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
  };

  const clearItems = () => {
    setTodos([]);
  };

  const deleteItem = id => {
    let temp = todos.filter(item => item.id !== id);
    setTodos(temp);
  };

  return (
    <Container maxWidth="sm">
      <Box m={3}>
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
          />
        </Card>
      </Box>
    </Container>
  );
};

export default ToDo;
