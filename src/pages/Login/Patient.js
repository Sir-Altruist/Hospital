import React from "react";
import {
  Container,
  Card,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Navbar from "../../components/navigation/Navbar";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard/result");
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <Box component="div" className="patient">
        <Card className="patient-card" elevation={3}>
          <Container>
            <Typography variant="h5" align="center" sx={{ paddingTop: "5rem" }}>
              Login 
            </Typography>
            <form
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="patient-form"
            >
                <div>
                <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Patient ID"
                type="text"
                fullWidth
                variant="standard"
                className="patient-field"
              />
                </div>
                <div>
                <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Phone Number"
                type="text"
                fullWidth
                variant="standard"
                className="patient-field"
              />
                </div>
              <div className="login-btn">
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  onClick={handleClick}
                >
                  Login
                </Button>
              </div>
            </form>
          </Container>
        </Card>
      </Box>
    </>
  );
};

export default Patient;
