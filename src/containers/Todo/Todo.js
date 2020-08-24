import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { database } from "../../firebase";

import TodoList from "../../components/TodoList";

const DEFAULT_CATEGORY = "shopping";

const TodoContainer = () => {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    database.ref(DEFAULT_CATEGORY).on("value", snapshot => {
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
        <TodoList todos={todos} />
      </div>
    </Card>
  );
};

export default TodoContainer;
