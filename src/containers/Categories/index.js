import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import { database } from "../../firebase";

import { CATEGORY_KEY } from "../../constants";

import CategoryList from "./CategoryList";

const Categories = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    database.ref(`/${CATEGORY_KEY}`).on("value", snapshot => {
      const values = snapshot.val();
      if (values) {
        setCategories(values);
      }
    });
  }, []);

  return (
    <Card style={{ padding: "25px" }}>
      <div className="todoFormWrapper">
        <Typography variant="h5" color="initial">
          Categories
        </Typography>
        <CategoryList categories={categories} />
      </div>
    </Card>
  );
};

export default Categories;
