import React from 'react'
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <Box className="footer">
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" align="center" className="info">
                Contact Information
              </Typography>
              <span className="info-one">
                <LocationOnIcon sx={{ color: "white" }} />
                <Typography variant="body2" sx={{ color: "white" }}>
                  3, Alfred Rewande Street Opebi, off salvation street, ikeja
                  lagos
                </Typography>
              </span>
              <span className="info-two">
                <MailOutlineIcon sx={{ color: "white" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "white", paddingLeft: "1.5rem" }}
                >
                  sterlingtech@support.io
                </Typography>
              </span>
              <span className="info-three">
                <PhoneEnabledIcon sx={{ color: "white" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "white", paddingLeft: "1.5rem" }}
                >
                  +234-8180907820
                </Typography>
              </span>
              <span className="social">
                <Link to="/">
                  <FacebookIcon sx={{ color: "white" }} />
                </Link>
                <Link to="/">
                  <InstagramIcon sx={{ color: "white" }} />
                </Link>
                <Link to="/">
                  <TwitterIcon sx={{ color: "white" }} />
                </Link>
                <Link to="/">
                  <LinkedInIcon sx={{ color: "white" }} />
                </Link>
              </span>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" align="center" className="quick">
                Institutions
                <ul className="dept-links">
                  <li> College of Midwifery</li>
                  <li>Medical Laboratory</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" align="center" className="department">
                Departments
                <ul className="dept-links">
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
              <Typography variant="h6" align="center" className="group">
                Subsidiaries
                <ul className="dept-links">
                  <li> Delta State</li>
                  <li>Ogun State</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "center", paddingTop: "5rem" }}
          >
            &copy; Copyright {year}. All rights reserved
          </Typography>
        </Container>
      </Box>
    )
}

export default Footer
