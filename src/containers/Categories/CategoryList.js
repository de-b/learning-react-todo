import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CategoryItem from "./CategoryItem";
import CategoryModal from "../../components/CategoryModal";

const CategoryList = ({ categories, onAddCategory, onEditCategory }) => {
  const [showModel, setShowModel] = useState(false);

  const handleAddCategory = category => {
    onAddCategory(category);
    setShowModel(false);
  };

  const handleToggleModel = show => () => {
    setShowModel(show);
  };

  return (
    <Fragment>
      <Card style={{ padding: "25px" }}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h5" color="initial">
            Categories
          </Typography>

          <Fab size="small" color="primary" onClick={handleToggleModel(true)}>
            <AddIcon />
          </Fab>
        </Box>

        <List>
          {Object.keys(categories).map(key => (
            <CategoryItem
              key={key}
              category={{
                ...categories[key],
                categoryId: key,
              }}
              onEdit={onEditCategory}
            />
          ))}
        </List>
      </Card>
      {showModel && (
        <CategoryModal
          onSubmit={handleAddCategory}
          onCancel={handleToggleModel(false)}
        />
      )}
    </Fragment>
  );
};

export default CategoryList;
