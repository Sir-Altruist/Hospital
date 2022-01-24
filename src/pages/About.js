import React from "react";
import { Typography, Card, Container, Box, Grid } from "@mui/material";
import AboutImg from '../assets/icons/about.svg'
import Navbar from "../components/navigation/Navbar";
import "./contact.css";
import { teamData1, teamData2 } from '../components/teamList'
import Team from '../components/Team'

const About = () => {
  return (
    <>
      <Navbar />
        <Box component="div" className='about-root'>
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <img src={AboutImg} alt='about' />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className='about-card'>
                  <Typography variant='h4' component='h2' className='about-title'>About Us</Typography>
                  <Typography variant='body1' component='p' className='about-content'> 
                  We provide qualitative health services to our patients on daily
                  basis. Our standard facilities aid our operations for timely and
                  quality service delivery <br /> in all our branches across Nigeria.
                  For over half a century (5 decades), OLA Catholic Hospital has been
                  at the forefront of providing patient focused care and exceptional
                  clinical services to the people of Nigeria from Oyo, Ogun and Delta.
                  We provide a broad range of services which cut across various
                  medical fields the ultimate aim of which is to take care of you and
                  support you, and your family through what may be a distressing
                  period.
                  </Typography>  
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component='div' className='about-root'>
          <Container>
            <Typography variant='h4' align='center' sx={{ fontWeight: 'bold', pb: 5}}>Meet Our Team</Typography>
            <Grid container sx={{ mt: 5, mb: 5, display: 'flex', justifyContent: 'center' }}>
              {teamData1.map((member, i) => {
                return (
                  <Grid item xs={12} md={4} key={i}>
                    <Team member={member} />
                  </Grid>
                )
              })}
            </Grid>
            <Grid container sx={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', marginBottom: '5rem' }}>
              {teamData2.map((member, i) => {
                return (
                  <Grid item xs={12} md={4} key={i}>
                    <Team member={member} />
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Box>
        </>
  );
};

export default About;
