import React from "react";
import ToDoForm from "./ToDoForm";
import ListOfTodos from "./ListOfTodos";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const ToDo = () => {
  return (
    <Container maxWidth="sm">
      <Box m={3}>
        <Card style={{ padding: "25px" }}>
          <ToDoForm />
          <ListOfTodos />
        </Card>
      </Box>
    </Container>
  );
};

export default ToDo;
