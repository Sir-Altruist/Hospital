import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Navbar from "../components/navigation/Navbar";
import ContactImg from "../assets/images/contact.png";
import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box component="div" className="contact-root">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={ContactImg} alt="contact" className="contact-img" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="contact-card">
                <Container className="contact-form">
                  <Typography variant="h5" className="contact-title">
                    How may we help?
                  </Typography>
                  <form noValidate autoComplete="false">
                    <TextField
                      size="small"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      className="contact-field"
                    />
                    <TextField
                      size="small"
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      className="contact-field"
                    />
                    <TextField
                      size="small"
                      fullWidth
                      label="Description"
                      variant="outlined"
                      multiline
                      rows={4}
                      className="contact-field"
                    />
                    <div style={{ textAlign: "right", marginTop: "1rem" }}>
                      <Button className="contact-btn">Submit</Button>
                    </div>
                  </form>
                </Container>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component='div' style={{ width: '100%', minHeight: '50vh', backgroundColor: '#c4c4c41a', padding: '5rem 0'}}>
        <Container>
          <Grid container>
          <Grid item xs={12} md={4}>
            <div>
            <Typography variant='h5' sx={{ pt: 2, fontWeight: 'bold'}}>
              Location <LocationOnIcon color='error' />
            </Typography>
            <Typography variant='body1' color='textSecondary' sx={{ pt: 2}}>
              3, Alfred Rewande Street, Off Salvation, Opebi Junction, Ikeja Lagos
            </Typography> 
            </div>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center'}}>
          <div>
            <Typography variant='h5' sx={{ pt: 2, fontWeight: 'bold'}}>
              Phone <PhoneEnabledIcon color='error' />
            </Typography>
            <Typography variant='body1' sx={{ pt: 2}} color='textSecondary'>
              +234-8180907820
            </Typography> 
            </div>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center'}}>
          <div>
            <Typography variant='h5'  sx={{ pt: 2, fontWeight: 'bold'}}>
              Email <MailOutlineIcon color='error' />
            </Typography>
            <Typography variant='body1' color='textSecondary' sx={{ pt: 2}}>
              sterlingtech@support.io
            </Typography> 
            </div>
          </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
