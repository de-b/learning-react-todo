import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import TodoForm from "../containers/TodoForm";
import TodoContainer from "../containers/TodoList";

const ToDo = () => {
  return (
    <Container maxWidth="sm">
      <Box m={3}>
        <TodoForm />
        <TodoContainer />
      </Box>
    </Container>
  );
};

export default ToDo;
