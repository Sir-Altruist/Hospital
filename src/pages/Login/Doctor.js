import React, { useState } from "react";
import {
  Container,
  Card,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import Navbar from "../../components/navigation/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

const Doctor = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => setDisplay(!display);
  const [rota, setRota] = useState('')
  const handleRota = e => {
    setRota(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    window.location.reload();
  };

  const handleDoctorRoute = (e) => {
    e.preventDefault();
    navigate("/login/doctor");
    window.location.reload();
  };

  const handleNurseRoute = (e) => {
    e.preventDefault();
    navigate("/login/nurse");
    window.location.reload();
  };

  const handleAdministratorRoute = (e) => {
    e.preventDefault();
    navigate("/login/administrator");
    window.location.reload();
  };
  return (
    <>
      <Navbar />
      <Box component="div" className="login">
        <Card className="login-card" elevation={3}>
          <Container>
            <Typography variant="h5" align="center" sx={{ paddingTop: "3rem" }}>
              Login as
            </Typography>
            <div className="log-btns">
              <Button
                variant={
                  location.pathname === '/login/doctor' ? 'contained' : ''
                }
                color= {
                  location.pathname === '/login/doctor' ? 'primary' : 'inherit'
                }
                disableRipple
                disableElevation
                onClick={handleDoctorRoute}
              >
                Doctor
              </Button>
              <Button
                disableRipple
                disableElevation
                variant={
                  location.pathname === '/login/nurse' ? 'contained' : ''
                }
                color= {
                  location.pathname === '/login/nurse' ? 'primary' : 'inherit'
                }
                onClick={handleNurseRoute}
              >
                Nurse
              </Button>
              <Button
                disableRipple
                disableElevation
                variant={
                  location.pathname === '/login/administrator' ? 'contained' : ''
                }
                color= {
                  location.pathname === '/login/administrator' ? 'primary' : 'inherit'
                }
                onClick={handleAdministratorRoute}
              >
                Administrator
              </Button>
            </div>
            <form
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              className="login-form"
            >
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                className="field"
              />
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Phone Number"
                type="text"
                fullWidth
                variant="standard"
                className="field"
              />
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Department"
                type="text"
                fullWidth
                variant="standard"
                className="field"
              />
              <div className="login-btn">
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  onClick={handleClick}
                  sx={{ mb: 2 }}
                >
                  Login
                </Button>
              </div>
              <Divider />
              <Typography variant="h5" align="center" sx={{ paddingTop: '5rem' }}>
                Rota for Duty
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                id="id"
                label="Name of Doctor"
                type="text"
                fullWidth
                variant="standard"
                className="field"
                value={rota}
                onChange={handleRota}
              />
              {
                rota === ''
                ? <Button
                color="primary"
                variant="contained"
                sx={{ mt: 5 }}
                disabled={true}
              >
                Check
              </Button>
              : <Button
              color="primary"
              variant="contained"
              sx={{ mt: 5 }}
              onClick={handleDisplay}
            >
              Check
            </Button>
              }
              <div>
                {rota !== '' && display && (
                  <form style={{ marginTop: '3rem'}}>
                    <input type="date" />
                  </form>
                )}
              </div>
            </form>
          </Container>
        </Card>
      </Box>
    </>
  );
};

export default Doctor;
