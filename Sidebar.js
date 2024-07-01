// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/tables">
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/charts">
        <ListItemText primary="Charts" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemText primary="Kanban" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
