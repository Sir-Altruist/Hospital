import React from 'react';
import { ListItem,  Link } from '@mui/material'
// import { Link} from 'react-router-dom';

const Sidebar = ({ item }) => {
    // const location = useLocation()
  return <>
  <ListItem
  button
  >
      <Link
      to={item.path}
      className='sidemenu'
      >
          {item.name}
      </Link>

  </ListItem>
  </>;

};

export default Sidebar;

