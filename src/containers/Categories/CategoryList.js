import React from "react";
import List from "@material-ui/core/List";

import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  return (
    <List>
      {Object.keys(categories).map(key => (
        <CategoryItem
          key={key}
          category={{
            ...categories[key],
            categoryId: key,
          }}
        />
      ))}
    </List>
  );
};

export default CategoryList;
