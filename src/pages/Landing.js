import React from 'react'
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Navbar from '../components/navigation/Navbar'
import Chart from '../assets/images/chart.png'
import Appointment from '../components/Appointment'
import Carousel from 'react-material-ui-carousel'
import { testimonies, clients } from '../components/data'
import Testimonials from '../components/Testimonials'
import Client from '../components/Client'
import { Link } from 'react-router-dom'


const Landing = () => {

    const date = new Date()
    const year = date.getFullYear()
    return (
        <>
         <Navbar />
         <Box component='div' className='landing'>
             <Container>
                 <Grid container>
                    <Grid item xs={12} md={5}>
                        <Typography variant='h4' className='bg-text'>
                            Ola Cathlic Hospital
                        </Typography>
                        <Typography variant='body1' className='bg-para'>
                            We continue to strive to create products that are worth selling with the best quality for you. 
                            By joining us you will get more benefits. 
                            Expand the reach of your business and make a profit together
                        </Typography>
                        <form noValidate autoComplete='off' className='form'>
                            <TextField
                            size='small'
                            // fullWidth
                            variant='outlined'
                            placeholder='Search for a location...'
                            className='textfield' />
                        <Button 
                        type="submit"
                        variant='contained'
                        className='search'
                        aria-label="search"
                        color='primary'
                        >
                        <i className='fas fa-search'></i>
                        </Button>
                    </form>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                     <Grid item xs={12} md={6}>
                         <img src={Chart} alt='chart' className='chart' />
                     </Grid>
                 </Grid>
             </Container>
        </Box>
        <Box component='div' className='section-2'>
            <Container>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Typography variant='h5' color='textSecondary'>Give us a call</Typography>
                    <div className='call'>
                    <i className='fas fa-phone'></i>
                    <Typography variant='body2' color='textSecondary'>+234-8180907820</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography variant='h5' color='textSecondary'>Send us a message</Typography>
                    <div className='message'>
                    <i className='fas fa-envelope'></i>
                    <Typography variant='body2' color='textSecondary'>sterlingtech@support.io</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <Typography variant='h5' color='textSecondary'>Visit our Location</Typography>
                    <div className='location'>
                    <i className='fas fa-location'></i>
                    <Typography  align='center' variant='body2' color='textSecondary'>
                        3, Alfred Rewande Street Opebi, off salvation street, ikeja lagos
                    </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3} mt={3}>
                <Appointment />
            </Grid>
            </Container>
        </Box>
        <Box component='div' className='section-3'>
            <Container>
            <Typography variant='h6' align='center' sx={{fontWeight: 'bold', color: 'white', pt:5}}>
                Testimonials
            </Typography>
            <Typography variant='body2' align='center' sx={{paddingTop: '1rem', color: 'white'}}>
            Read testimonies from our various clients and customers who have benefitted greatly from our service
            </Typography>
            <Grid sx={{ marginTop: '5rem'}}>
            <Carousel
                animation='slide'
                autoPlay={true} 
                cycleNavigation 
                timeout={300}
                navButtonsAlwaysVisible={true}
                >
                    {testimonies.map((single, i) => {
                        return (
                            <Grid item key={i}>
                                <Testimonials single={single} />
                            </Grid>
                        )
                    })}
                </Carousel>
            </Grid>
            </Container>
        </Box>
        <Box component='div' className='section-4'>
            <Container>
            <Typography variant='h6' align='center' sx={{fontWeight: 'bold'}}>Our Clients</Typography>
            <Grid container sx={{mt:5}}>
                {clients.map((client, i) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Client client={client} />
                        </Grid>
                    )
                })}
            </Grid>
            </Container>
        </Box>
        <Box className='footer'>
            <Container>
                <Grid container>
                <Grid item xs={12} md={3}>
                    <Typography 
                    variant='h6' 
                    align='center' 
                    className='contact'
                    >
                        Contact Information
                    </Typography>
                    <span className='contact-one'>
                        <LocationOnIcon sx={{ color: 'white' }} />
                        <Typography variant='body2' sx={{ color: 'white'}}>
                        3, Alfred Rewande Street Opebi, off salvation street, ikeja lagos
                        </Typography>  
                    </span>
                    <span className='contact-two'>
                        <MailOutlineIcon sx={{color: 'white' }} />
                        <Typography variant='body2' sx={{color: 'white', paddingLeft: '1.5rem'}}>
                        sterlingtech@support.io
                        </Typography>
                    </span>
                    <span className='contact-three'>
                        <PhoneEnabledIcon sx={{color: 'white'}} />
                        <Typography variant='body2' sx={{ color: 'white', paddingLeft: '1.5rem' }}>
                            +234-8180907820
                        </Typography>
                    </span>
                    <span className='social'>
                        <Link to='/'>
                        <FacebookIcon sx={{ color: 'white'}} />
                        </Link>
                        <Link to='/'>
                        <InstagramIcon sx={{ color: 'white'}} />
                        </Link>
                        <Link to='/'>
                        <TwitterIcon sx={{ color: 'white'}} />
                        </Link>
                        <Link to='/'>
                        <LinkedInIcon sx={{ color: 'white'}} />
                        </Link>
                    </span>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography 
                variant='h6' 
                align='center' 
                className='quick'
                >
                    Institutions
                    <ul className='dept-links'>
                        <li> College of Midwifery</li>
                        <li>Medical Laboratory</li>
                    </ul>
                </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography 
                variant='h6' 
                align='center' 
                className='department'
                >
                    Departments
                    <ul className='dept-links'>
                        <li> Dental</li>
                        <li>Family Medicine</li>
                        <li>Internal Medicine</li>
                        <li>O & G Surgery</li>
                        <li>X-ray</li>
                        <li>Other Laboratory</li>
                    </ul>
                </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography 
                variant='h6' 
                align='center' 
                className='group'
                >
                    Subsidiaries
                    <ul className='dept-links'>
                        <li> Delta State</li>
                        <li>Ogun State</li>
                    </ul>

                </Typography>
                </Grid>
                </Grid>
                <Typography variant='body2' sx={{color: 'white', textAlign:'center', paddingTop: '5rem'}}>
                    &copy; Copyright {year}. All rights reserved
                </Typography>
            </Container>
        </Box>
        </>
    )
}

export default Landing
