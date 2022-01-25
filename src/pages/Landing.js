import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Navbar from "../components/navigation/Navbar";
import Carousel from "react-material-ui-carousel";
import { testimonies, clients, location } from "../components/data";
import Testimonials from "../components/Testimonials";
import Client from "../components/Client";
import Health from "../assets/images/health-remove.png";
import Location from "../components/Location";
import Sliders from "../components/Sliders";
import AppModal from "../components/Modals/AppModal";
import LoginModal from "./Login/LoginModal";
import Footer from "../components/navigation/Footer";

const Landing = () => {


  //appointment modal
  const [open, setOpen] = useState(false);
  // const [open2, setOpen2] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [patientLogin, setPatientLogin] = useState(false);
  const handlePatientOpen = () => setPatientLogin(true);
  const handlePatientClose = () => setPatientLogin(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box component="div" className="landing">
        {/* <div className="background"> */}
        <Container>
          <Grid container sx={{ mt: 5 }}>
            <Grid item sm={12} md={6} className="leftSide"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
              <Typography
                variant="h3"
                sx={{ fontSize: "3rem", fontWeight: "600", color: "#342D7E" }}
              >
                O.L.A Catholic Hospital
              </Typography>
              <Typography sx={{ pt: 2 }}>
                We provide qualitative health services to our patients on daily
                basis. Our standard facilities aid our operations for timely and
                quality service delivery <br /> in all our branches across
                Nigeria
              </Typography>
              <div className="icon">
                {location.map((single, i) => {
                  return <Location key={i} single={single} />;
                })}
              </div>
              <Typography
                variant="h6"
                sx={{
                  paddingLeft: ".5rem",
                  paddingTop: ".1rem",
                  color: "#342D7E",
                }}
              >
                Book appointment and check result as a patient or visitor
              </Typography>
              <div style={{ display: "flex", paddingTop: "1rem" }}>
                <Button
                  variant="contained"
                  type="button"
                  sx={{ mr: 2 }}
                  onClick={handleOpen}
                >
                  Book Appointment
                </Button>
                <Button variant="contained" type="button" color="success"
                onClick={handlePatientOpen}>
                  Collect Test Result
                </Button>
              </div>
            </Grid>
            <Grid item sm={12} md={1}></Grid>
            <Grid item sm={12} md={5} className="rightSide">
              <Sliders />
            </Grid>
          </Grid>
        </Container>
        <AppModal close={handleClose} open={open} />
        <LoginModal handlePatientClose={handlePatientClose} patientLogin={patientLogin}  />
      </Box>
      <Box component="div" className="section-2">
        <Container>
          <Grid container sx={{ marginTop: "15rem" }}>
            <Grid item sm={12} md={4} 
             data-aos="fade-right"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             >
              <img src={Health} alt="health" />
            </Grid>
            <Grid item sm={12} md={3}></Grid>
            <Grid item sm={12} md={5}
             data-aos="fade-left"
             data-aos-delay="500"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             >
              <Typography variant="h3" sx={{ paddingTop: "10rem" }}>
                24/7 Service Avaialble
              </Typography>
              <Typography
                variant="h6"
                sx={{ paddingTop: "1rem", textAlign: "center" }}
              >
                Call Ambulance for Emergency
              </Typography>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <Button variant="contained" size="large" className="btn-glow">
                  Request for an Ambulance
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="div" className="section-3">
        <Container>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", color: "white", pt: 5 }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{ paddingTop: "1rem", color: "white" }}
          >
            Read testimonies from our various clients and customers who have
            benefitted greatly from our service
          </Typography>
          <Grid sx={{ marginTop: "5rem" }}>
            <Carousel
              animation="slide"
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
                );
              })}
            </Carousel>
          </Grid>
        </Container>
      </Box>
      <Box component="div" className="section-4">
        <Container>
          <Typography variant="h6" align="center" sx={{ fontWeight: "bold" }}>
            Our Clients
          </Typography>
          <Grid container sx={{ mt: 5 }}>
            {clients.map((client, i) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={i}
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                >
                  <Client client={client} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Footer />   
    </>
  );
};

export default Landing;
