import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import TodoForm from "../containers/TodoForm";
import TodoContainer from "../containers/TodoList";

const ToDo = () => {
  // itemToEdit state is for the todo view - itemToEdit is a whole object with id, name and completed
  // The View will know which item to edit and pass on item to form to let form know which one
  // When edit is clicked setItemToEdit will set the item.
  // Thus onEdit item item id is passed to this view and the its passed on to the form to edit
  //
  // After edit is completed again form will let this view know to clear itemToEdit
  const [itemToEdit, setItemToEdit] = useState(undefined);

  const { id: categoryId } = useParams();

  const handleDone = () => {
    setItemToEdit(null);
  };

  const handleEditItem = item => {
    setItemToEdit(item);
  };

  return (
    <Container maxWidth="sm">
      <Box m={3}>
        <TodoForm
          itemToEdit={itemToEdit}
          onDone={handleDone}
          categoryId={categoryId}
        />
        <TodoContainer onEditItem={handleEditItem} categoryId={categoryId} />
      </Box>
    </Container>
  );
};

export default ToDo;
