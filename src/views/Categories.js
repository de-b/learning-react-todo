import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Categories from "../containers/Categories";

const CategoriesView = () => {
  return (
    <Container maxWidth="sm">
      <Box m={3}>
        <Categories />
      </Box>
    </Container>
  );
};

export default CategoriesView;
