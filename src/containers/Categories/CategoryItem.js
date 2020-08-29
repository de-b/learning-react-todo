import React, { useState, Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import CategoryModel from "../../components/CategoryModal";
import ConfirmDialog from "../../components/ConfirmDialog";

const CategoryList = ({ category, onEdit, onDelete }) => {
  const { categoryId, name, description } = category;
  const [showEdit, setShowEdit] = useState(false);

  const handleToggleEdit = show => () => {
    setShowEdit(show);
  };

  const handleSave = ({
    name: updatedName,
    description: updatedDescription,
  }) => {
    if (onEdit) {
      onEdit({
        id: categoryId,
        name: updatedName,
        description: updatedDescription,
      });
    }
    setShowEdit(false);
  };

  const handleDelete = () => {
    onDelete({
      id: categoryId,
      name,
      description,
    });
  };

  return (
    <Fragment>
      <ListItem button dense component={Link} to={`/${categoryId}`}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={description} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={handleToggleEdit(true)}
          >
            <EditIcon />
          </IconButton>
          <ConfirmDialog
            title="Delete Category"
            message="Are you sure you want to delete category?"
            onConfirm={handleDelete}
          >
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ConfirmDialog>
        </ListItemSecondaryAction>
      </ListItem>

      {showEdit && (
        <CategoryModel
          onCancel={handleToggleEdit(false)}
          category={category}
          onSubmit={handleSave}
        />
      )}
    </Fragment>
  );
};

export default CategoryList;
