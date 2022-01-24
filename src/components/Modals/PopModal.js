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
import { Button, Collapse, ListItemIcon, TextField, Box, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from "@mui/material";
import { servicesItems } from '../navigation/menuItems'
import { 
  dentalDoctors, 
  familyDoctors, 
  internalDoctors, 
  surgeryDoctors, 
  xrayDoctors, 
  labDoctors, 
  paedDoctors 
} from '../available/doctorsList' ;
import Verification from './Verification'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopModal({ open1, close1 }) {
  const [openNew, setOpenNew] = useState(false);
  const [openExisting, setOpenExisting] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false)
  const [department, setDepartment] = useState(false)
  const [list, setList] = useState('')
  const [confirm, setConfirm] = useState(false)

  const toggleNew = () => setOpenNew(!openNew);
  const toggleExisting = () => setOpenExisting(!openExisting);
  const toggleUpdate = () => setOpenUpdate(!openUpdate);
  const handleChange = e => setDepartment(e.target.value)
  const handleListChange = e => setList(e.target.value)
  const openConfirm = () => setConfirm(true)
  const closeConfirm = () => setConfirm(false)



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
          <ListItem button sx={{my: 3}}>
            <ListItemText primary="New Appointment"  />
            <ListItemIcon>
            <Button variant='contained' color='primary' onClick={toggleNew} style={{ textTransform: 'inherit'}}>
              New Appointment
            </Button>
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
                <FormControl variant="standard" fullWidth sx={{ mb: 1}}>
                  <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={department}
                    onChange={handleChange}
                    label="Department"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {servicesItems.map((dept, i) => {
                      return (
                        <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                      )
                    })}
                  </Select>
                </FormControl>
                </div>
                <div>
                <FormControl variant="standard" fullWidth sx={{ mb: 1}}>
                  <InputLabel id="demo-simple-select-standard-label">Available Doctors</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={list}
                    onChange={handleListChange}
                    label="Available Doctors"
                  >
                   
                    {
                     department === 'Dental' 
                    ?
                    <span>
                       {dentalDoctors.map((dept, i) => {
                      return (
                        <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                      )
                    })}
                    </span>
                    : department === 'Family Medicine' 
                    ? 
                    <span>
                       {familyDoctors.map((dept, i) => {
                      return (
                        <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                      )
                    })}
                    </span>
                     : department === 'Internal Medicine' 
                    ? 
                    <span>
                    {internalDoctors.map((dept, i) => {
                   return (
                     <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                   )
                 })}
                 </span> 
                 : department === 'O & G Surgery'
                 ?
                 <span>
                    {surgeryDoctors.map((dept, i) => {
                   return (
                     <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                   )
                 })}
                 </span> 
                 : department === 'X-ray'
                 ?
                 <span>
                 {xrayDoctors.map((dept, i) => {
                return (
                  <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                )
              })}
              </span> 
              : department === 'Other Laboratory'
              ? 
              <span>
                    {labDoctors.map((dept, i) => {
                   return (
                     <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                   )
                 })}
                 </span>
                : department === 'Paediatric'
                ? 
                <span>
                    {paedDoctors.map((dept, i) => {
                   return (
                     <MenuItem value={dept.name} key={i}>{dept.name}</MenuItem>
                   )
                 })}
                 </span> :
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    }
                  </Select>
                </FormControl>
                </div>
                <div>
                <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Phone Number"
                type="text"
                fullWidth
                variant="standard"
              />
                </div>
                <div>
                <TextField
                autoFocus
                margin="dense"
                id="id"
                label="E-mail Address"
                type="email"
                fullWidth
                variant="standard"
              />
                </div>
                <div>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Description"
                    style={{ marginTop: '2rem', width: '100%', height: '5rem', outline: '0' }}
                />
                </div>
                <div>
                  <Button 
                  color="primary" 
                  variant="contained" 
                  fullWidth 
                  sx={{ my: 2, textTransform: 'inherit' }}
                  onClick={openConfirm}
                  
                  >
                    Submit
                  </Button>
                </div>
              </Box>
            </div>
          </Collapse>
          <Divider />
          <ListItem button sx={{ my: 3}}>
            <ListItemText primary="Returning Patient" />
            <ListItemIcon>
            <Button variant='contained' color='primary' onClick={toggleExisting} style={{ textTransform: 'inherit'}}>
              Resume Appointment
            </Button>
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
                    label="Patient ID"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Password"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </div>
                <div>
                  <Button color="primary" fullWidth variant="contained" sx={{ my: 2, textTransform: 'inherit' }}>
                    Submit
                  </Button>
                </div>
              </Box>
            </div>
          </Collapse>
          <Divider />
          <ListItem button sx={{my: 3}}>
            <ListItemText primary="Update Appointment" />
            <ListItemIcon>
            <Button variant='contained' color='primary' onClick={toggleUpdate} style={{ textTransform: 'inherit'}}>
              Change Appointment
            </Button>
            </ListItemIcon>
          </ListItem>
          <Collapse in={openUpdate} timeout="auto" unmountOnExit>
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
                  <input type='date' style={{ width: '100%'}} />
                </div>
                <div>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Time"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </div>
                <div>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Description"
                    style={{ marginTop: '2rem', width: '100%', height: '5rem', outline: '0' }}
                />
                </div>
                <div>
                  <Button color="primary" variant="contained" fullWidth sx={{ my: 2, textTransform: 'inherit' }}>
                    Submit
                  </Button>
                </div>
              </Box>
            </div>
          </Collapse>
        </List>
      </Dialog>
      <Verification confirm={confirm} closeConfirm={closeConfirm} /> 
    </div>
  );
}
