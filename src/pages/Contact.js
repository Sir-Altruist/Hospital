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

const Contact = () => {
  return (
    <>
      <Navbar />
      <Box component="div" className="contact">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={ContactImg} alt="contact" className="contact-img" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card classNmae="contact-card">
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
    </>
  );
};

export default Contact;
