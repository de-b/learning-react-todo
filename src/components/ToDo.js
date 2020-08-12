import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ListOfTodos from "./ListOfTodos";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
const mainTodos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const ToDo = () => {
  const [todos, setTodos] = useState(mainTodos);
  const [inputText, setInputText] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [itemToEdit, setItemToEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    console.log("useEffect run");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

    if (itemToEdit) {
      const tempTodos = todos.map((item) => {
        return item.id === id ? { ...todos, task: inputText } : item;
        //if id matches then it will only update taks field and rest item will be used
      });
      setTodos(tempTodos);
      setItemToEdit(false);
      handleAlert({ type: "success", text: "successfully updated" });
    } else {
      setTodos([
        ...todos,
        {
          category: "shopping",
          id: uuidv4(),
          task: inputText,
          completed: false,
        },
      ]);
      handleAlert({ type: "success", text: "successfully added" });
    }

    setInputText("");
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
    setInputText("");
  };

  const handleEdit = (id) => {
    //console.log(id);
    const singleItem = todos.find((item) => item.id === id);
    setItemToEdit(true);
    setId(id);
    setInputText(singleItem.task);
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
            itemToEdit={itemToEdit}
            handleEdit={handleEdit}
          />
          <ListOfTodos
            todos={todos}
            clearItems={clearItems}
            deleteItem={deleteItem}
            handleEdit={handleEdit}
          />
        </Card>
      </Box>
    </Container>
  );
};

export default ToDo;
