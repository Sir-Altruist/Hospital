import React, { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Button, Collapse, ListItemIcon, TextField, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopModal({ open1, close1 }) {
  const [openNew, setOpenNew] = useState(false);
  const [openExisting, setOpenExisting] = useState(false);

  const toggleNew = () => setOpenNew(!openNew);
  const toggleExisting = () => setOpenExisting(!openExisting);

  return (
    <div>
      <Dialog
        fullScreen
        open={open1}
        onClose={close1}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={close1}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: "1.5rem" }}
              variant="h6"
              component="div"
              align="center"
            >
              In-Person Appointment
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="New Appointment" secondary="create" />
            <ListItemIcon>
              {openNew ? (
                <ExpandMore onClick={toggleNew} />
              ) : (
                <ExpandLess onClick={toggleNew} />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openNew} timeout="auto" unmountOnExit>
            <div style={{ width: "10rem", margin: "1rem auto" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Type of Need"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Doctor's Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <Button color="primary" variant="contained" sx={{ my: 2 }}>
                    Submit
                  </Button>
                </div>
              </Box>
            </div>
          </Collapse>
          <Divider />
          <ListItem button>
            <ListItemText primary="Exisitng Appointment" secondary="Continue" />
            <ListItemIcon>
              {/* <AddCircleOutlineIcon color='info' /> */}
              {openExisting ? (
                <ExpandMore onClick={toggleExisting} />
              ) : (
                <ExpandLess onClick={toggleExisting} />
              )}
            </ListItemIcon>
          </ListItem>
          <Collapse in={openExisting} timeout="auto" unmountOnExit>
            <div style={{ width: "10rem", margin: "1rem auto" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Location"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Type of Need"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Doctor's Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    // className='field'
                  />
                </div>
                <div>
                  <Button color="primary" variant="contained" sx={{ my: 2 }}>
                    Submit
                  </Button>
                </div>
              </Box>
            </div>
          </Collapse>
        </List>
      </Dialog>
    </div>
  );
}
