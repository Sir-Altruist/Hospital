import React, { useState, forwardRef } from 'react'
import { 
    DialogContent, 
    DialogActions, 
    DialogTitle, 
    Box, 
    Dialog, 
    Button, 
    Slide, 
    Divider,
    TextField,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    TextareaAutosize
} from '@mui/material'

const AppModal = ({ close, open }) => {

    const [gender, setGender] = useState('')
    const handleGenderChange = e => setGender(e.target.value)
    const [department, setDepartment] = useState('')
    const handleDepartmentChange = e => setDepartment(e.target.value)

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    })

    return (
        <Box component='div'>
             <Dialog 
                open={open} 
                onClose={close}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"           
             >
                 <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                 <DialogTitle>Appointment</DialogTitle>
                 <DialogTitle><i className='fas fa-times' onClick={close} style={{cursor: 'pointer'}}></i></DialogTitle>
                 </div>
        <Divider />
        <DialogContent sx={{mt:1}}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            // fullWidth
            variant="standard"
            sx={{mr:2}}
          />
           <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            // fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Phone"
            label="Phone Number"
            type="text"
            // fullWidth
            variant="standard"
            sx={{mr:2}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="text"
            // fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleGenderChange}
          label="Gender"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Non-binary'}>Non-binary</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={department}
          onChange={handleDepartmentChange}
          label="Department"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Department 1'}>Department 1</MenuItem>
          <MenuItem value={'Department 2'}>Department 2</MenuItem>
          <MenuItem value={'Department 3'}>Department 3</MenuItem>
          <MenuItem value={'Department 4'}>Department 4</MenuItem>
          <MenuItem value={'Department 5'}>Department 5</MenuItem>
        </Select>
      </FormControl>
        </DialogContent>
        <DialogContent>
        <TextareaAutosize
            aria-label="Symptoms"
            minRows={3}
            placeholder="Symptoms"
            style={{ width: '100%', minHeight: '2rem', outline: 0 }}
    />
        </DialogContent>
        <DialogActions style={{marginBottom: '1rem'}}>
          <Button onClick={close} variant='contained' color='success'>Submit</Button>
          <Button onClick={close} variant='contained' color='error'>Cancel</Button>
        </DialogActions>
      </Dialog>
        </Box>
    )
}

export default AppModal
