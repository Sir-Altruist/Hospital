import React from 'react';
import { Container, Card, Box, Typography, Button, TextField } from '@mui/material'
import Navbar from '../components/navigation/Navbar'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const handleClick = e => {
        e.preventDefault()
        navigate('/dashboard')
        window.location.reload()
    }
  return <>
    <Navbar />
  <Box component='div' className='login'>
      <Card className='login-card' elevation={3}>
          <Container>
            <Typography variant='h5' align='center' sx={{paddingTop: '3rem'}}>Login as</Typography>
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
                        label="Patient ID"
                        type="text"
                        fullWidth
                        variant="standard"
                        // className='field'
                    />
                  <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Email"
                        type="email"
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

export default Login;
