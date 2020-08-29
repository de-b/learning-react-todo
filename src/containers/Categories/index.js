import React, { useState, useEffect } from "react";

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

  return <CategoryList categories={categories} />;
};

export default Categories;
