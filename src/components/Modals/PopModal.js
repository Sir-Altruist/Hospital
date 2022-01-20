import React, { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { ListItemIcon } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopModal({ open1, close1 }) {

    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)
  return (
    <div>
      <Dialog
        fullScreen
        open={open1}
        onClose={close1}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={close1}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, fontSize: '1.5rem' }} variant="h6" component="div" align='center'>
              In-Person Appointment
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="New Appointment" secondary="create" />
            <ListItemIcon>
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Exisitng Appointment"
              secondary="Continue"
            />
            <ListItemIcon>
                {/* <AddCircleOutlineIcon color='info' /> */}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
