import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import {  useLocation, Link } from 'react-router-dom'

const Sidebar = ({ item }) => {
    const location = useLocation()
  return <>
  <ListItem
  button
//   sx={{ height: '5rem'}}

  >
      <Link
      to={item.path}
      className={location.pathname === item.path ? 'active' : 'notActive'}
      >
          <ListItemIcon>{location.pathname === item.path ? item.icon2 : item.icon1}</ListItemIcon>
          <ListItemText primary={item.name} />
      </Link>

  </ListItem>
  </>;

};

export default Sidebar;

