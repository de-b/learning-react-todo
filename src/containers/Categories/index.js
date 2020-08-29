import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

  const handleAddCategory = newCategory => {
    const categoryUuid = uuidv4();
    database.ref(`/${CATEGORY_KEY}/${categoryUuid}`).set(newCategory);
  };

  const handleEditCategory = updatedCategory => {
    console.log(">>>>>>>>>>>>", updatedCategory);
    const { id, name, description } = updatedCategory;

    database.ref(`/${CATEGORY_KEY}/${id}`).set({
      name,
      description,
    });
  };

  return (
    <CategoryList
      categories={categories}
      onAddCategory={handleAddCategory}
      onEditCategory={handleEditCategory}
    />
  );
};

export default Categories;
