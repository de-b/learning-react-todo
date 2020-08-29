import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Categories from "../containers/Categories";

const CategoriesView = () => {
  return (
    <Container maxWidth="sm">
      <Categories />
    </Container>
  );
};

export default CategoriesView;
