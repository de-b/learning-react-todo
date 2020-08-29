import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { database } from "../../firebase";
import List from "./List";

const TodoContainer = ({ categoryId, onEditItem }) => {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    database.ref(`/items/${categoryId}`).on("value", snapshot => {
      const s = snapshot.val();
      if (s) {
        setTodos(s);
      }
    });
  }, []);
  if (!todos) return <h1>Loading....</h1>;

  return (
    <Card style={{ padding: "25px" }}>
      <div className="todoFormWrapper">
        <Typography variant="h5" color="initial">
          Your Todo lists
        </Typography>
        <List todos={todos} onEditItem={onEditItem} categoryId={categoryId} />
      </div>
    </Card>
  );
};

export default TodoContainer;
