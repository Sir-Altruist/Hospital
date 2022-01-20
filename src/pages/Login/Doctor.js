import React from 'react';
import { Container, Card, Box, Typography, Button, TextField } from '@mui/material'
import Navbar from '../../components/navigation/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'


const Doctor = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = e => {
        e.preventDefault()
        navigate('/dashboard')
        window.location.reload()
    }

    const handleDoctorRoute = e => {
        e.preventDefault()
        navigate('/login/doctor')
        window.location.reload()
    }

    const handleNurseRoute = e => {
      e.preventDefault()
      navigate('/login/nurse')
      window.location.reload()
  }

  const handleAdministratorRoute = e => {
    e.preventDefault()
    navigate('/login/administrator')
    window.location.reload()
}
  return <>
    <Navbar />
  <Box component='div' className='login'>
      <Card className='login-card' elevation={3}>
          <Container>
            <Typography variant='h5' align='center' sx={{paddingTop: '3rem'}}>Login as</Typography>
            <div className='log-btns'>
              <Button
               variant={location.pathname === '/login/doctor' ? 'contained' : ''}
              disableRipple
              disableElevation
              color={location.pathname === '/login/doctor' ? 'primary' : 'inherit'}
              onClick={handleDoctorRoute}
              >
                Doctor
              </Button>
              <Button
              variant={location.pathname === 'login/nurse' ? 'contained' : ''}
              disableRipple
              disableElevation
              color={location.pathname === '/login/nurse' ? 'primary' : 'inherit'}
              onClick={handleNurseRoute}
              >
                Nurse
              </Button>
              <Button
              variant={location.pathname === '/login/administrator' ? 'contained' : ''}
              disableRipple
              disableElevation
              color={location.pathname === '/login/administrator' ? 'primary' : 'inherit'}
              onClick={handleAdministratorRoute}
              >
                Administrator
              </Button>
            </div>
            <form
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }
              }}
              noValidate
              autoComplete="off"
              className='form'
              >
                  <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Doctor ID"
                        type="text"
                        fullWidth
                        variant="standard"
                        // className='field'
                    />
                  <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        // className='field'
                    />
                    <div className='login-btn'>
                        <Button
                        variant='contained'
                        type='button'
                        color='primary'
                        onClick={handleClick}
                        >
                            Login
                            {/* <Link
                            to='/dashboard'
                            className='try'
                            >
                                Log In
                            </Link> */}
                        </Button>
                    </div>
            </form>
          </Container>
      </Card>
  </Box>
  </>;
};

export default Doctor;
