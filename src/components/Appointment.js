import React, { useState } from 'react'
import { Button, Card, CardContent, Container, Typography, Grid } from '@mui/material'
import AppModal from './Modals/AppModal'
import VideoModal from './Modals/VideoModal'
import AppointmentImg from '../assets/images/hospital-1.jpg'
import Emergency from '../assets/images/emergency.png'
import Video from '../assets/images/video.png'


const Appointment = () => {

    //appointment modal state
    const [open1, setOpen1] = useState(false)
    const handleOpen1 = () => setOpen1(true)
    const handleClose1 = () => setOpen1(false)

    //video modal state
    const [open2, setOpen2] = useState(false)
    const handleOpen2 = () => setOpen2(true)
    const handleClose2 = () => setOpen2(false)

    return (
        <>
        <Grid item xs={12} md={4}>
        <Card className='card' elevation={2}>
        <Container>
        <img src={AppointmentImg} alt='appointment' className='card-img'  />
        <CardContent>
        <Typography variant='h6'>Appointment</Typography>
        <Typography variant='body2' color='textSecondary' className='desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam viverra diam venenatis, venenatis id. 
        A magna lacinia velit vitae ut at duis
        </Typography>
        <Button
        variant='contained'
        endIcon= {<i className='fas fa-book'></i>}
        style={{textTransform: 'inherit'}}
        onClick={handleOpen1}
        >
            Book an Appointment
        </Button>
        </CardContent>
        </Container>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
        <Card className='card' elevation={2}>
        <Container>
        <img src={Emergency} alt='appointment' className='card-img'  />
        <CardContent>
        <Typography variant='h6'>Emergency</Typography>
        <Typography variant='body2' color='textSecondary' className='desc' style={{paddingBottom: '3.5rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam viverra diam venenatis, venenatis id. 
        A magna lacinia velit vitae ut at duis
        </Typography>
        </CardContent>
        </Container>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
        <Card className='card' elevation={2}>
        <Container>
        <img src={Video} alt='appointment' className='card-img'  />
        <CardContent>
        <Typography variant='h6'>Video</Typography>
        <Typography variant='body2' color='textSecondary' className='desc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam viverra diam venenatis, venenatis id. 
        A magna lacinia velit vitae ut at duis
        </Typography>
        <Button
        variant='contained'
        endIcon= {<i className='fas fa-video'></i>}
        style={{textTransform: 'inherit'}}
        onClick={handleOpen2}
        >
            Start a Video Call
        </Button>
        </CardContent>
        </Container>
    </Card>
    </Grid>

    <AppModal close={handleClose1} open={open1} />
    <VideoModal close={handleClose2} open={open2} />
    </>
    )
}

export default Appointment
