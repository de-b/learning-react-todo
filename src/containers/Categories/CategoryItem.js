import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const CategoryList = ({ category }) => {
  const { categoryId, name, description } = category;
  return (
    <ListItem button dense component={Link} to={`/${categoryId}`}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={description} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CategoryList;
