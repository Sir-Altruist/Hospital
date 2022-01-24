import React, { useState } from "react";
import { AppBar, Container, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MedicalDropdown, ServicesDropdown } from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const mouseEnter1 = () => {
    window.innerWidth < 900 ? setDropdown1(true) : setDropdown1(true);
  };
  const mouseEnter2 = () => {
    window.innerWidth < 900 ? setDropdown2(true) : setDropdown2(true);
  };

  const mouseLeave1 = () => {
    window.innerWidth < 900 ? setDropdown1(false) : setDropdown1(false);
  };
  const mouseLeave2 = () => {
    window.innerWidth < 900 ? setDropdown2(false) : setDropdown2(false);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: "#F9FBFF" }}>
        <Toolbar>
          <Container>
            <nav className="navbar">
              <Typography sx={{ wordBreak: "keep-all" }}>
                <Link
                  to="/"
                  className="brand"
                  style={{ wordBreak: "keep-all" }}
                >
                  O.L.A Catholic
                </Link>
              </Typography>
              <div onClick={handleClick} className="menu-icon">
                <i
                  className={click ? "fas fa-times" : "fas fa-bars"}
                  style={{ color: "white" }}
                ></i>
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={mouseEnter1}
                  onMouseLeave={mouseLeave1}
                >
                  <Link
                    to="/department/cardiology"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Department <i className="fas fa-caret-down" />
                  </Link>
                  {dropdown1 && <ServicesDropdown />}
                </li>
                <li
                  className="nav-item"
                  onMouseEnter={mouseEnter2}
                  onMouseLeave={mouseLeave2}
                >
                  <Link
                    to="/medical/residential"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Medical Institution <i className="fas fa-caret-down" />
                  </Link>
                  {dropdown2 && <MedicalDropdown />}
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Button
                    variant="contained"
                    type="button"
                    style={{
                      marginTop: "1.5rem",
                      textTransform: "inherit",
                      marginLeft: "1rem",
                    }}
                    // color='primary'
                  >
                    <Link to="/login/doctor" className="try">
                      Professional
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
