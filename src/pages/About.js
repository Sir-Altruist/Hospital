import React from "react";
import { Typography, Card, Box, CardContent } from "@mui/material";

import Navbar from "../components/navigation/Navbar";

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <div className="about">
        <Typography variant="h4" align="left" style={{ paddingTop: "10rem" }}>
          About Us
        </Typography>
        <Box as="div">
          <p>
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
          </p>
        </Box>
        <Typography sx={{ paddingTop: "3rem" }}></Typography>
      </div>
    </div>
  );
};

export default About;
