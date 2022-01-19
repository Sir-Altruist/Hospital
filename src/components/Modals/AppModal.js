import React, { useState, forwardRef } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
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
    TextareaAutosize,
    Typography
} from '@mui/material'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const AppModal = ({ close, open }) => {

    const [gender, setGender] = useState('')
    const handleGenderChange = e => setGender(e.target.value)
    const [department, setDepartment] = useState('')
    const handleDepartmentChange = e => setDepartment(e.target.value)
    const [branch, setBranch] = useState('')
    const handleBranchChange = e => setBranch(e.target.value)

    //responsive dialogue box
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box component='div'>
             <Dialog 
                open={open} 
                onClose={close}
                TransitionComponent={Transition}
                scroll={'paper'}
                fullScreen={fullScreen}
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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel id="demo-simple-select-standard-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={branch}
          onChange={handleBranchChange}
          label="branch"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Oyo'}>Oyo</MenuItem>
          <MenuItem value={'Ogun'}>Ogun</MenuItem>
          <MenuItem value={'Delta'}>Delta</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 190 }}>
        <div>
          <Typography variant='body2' sx={{ paddingBottom: '.5rem'}}>Branch Street</Typography>
          {
          branch === 'Oyo' ? <Typography>Oyo Street</Typography> 
          : branch === 'Ogun' ? <Typography>Ogun Street</Typography> 
          : branch === 'Delta' ? <Typography>Delta Street</Typography> 
          : ''
          }
        </div>
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
