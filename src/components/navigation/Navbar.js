import React, { useState } from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import {AboutDropdown, MedicalDropdown, ServicesDropdown} from './Dropdown'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const closeMobileMenu = () => setClick(false)

    const mouseEnter1 = () => {
        window.innerWidth < 900 ? setDropdown1(true) : setDropdown1(true)
    }
    const mouseEnter2 = () => {
        window.innerWidth < 900 ? setDropdown2(true) : setDropdown2(true)
    }
    const mouseEnter3 = () => {
        window.innerWidth < 900 ? setDropdown3(true) : setDropdown3(true)
    }

    const mouseLeave1 = () => {
        window.innerWidth < 900 ? setDropdown1(false) : setDropdown1(false)
    }
    const mouseLeave2 = () => {
        window.innerWidth < 900 ? setDropdown2(false) : setDropdown2(false)
    }
    const mouseLeave3 = () => {
        window.innerWidth < 900 ? setDropdown3(false) : setDropdown3(false)
    }

    const[navbar, setNavbar] = useState(false)
    const changeNav = () => {
        return window.scrollY >= 100
        ? setNavbar(true)
        : setNavbar(false)
    }

    return (
        <>
        {window.addEventListener('scroll', changeNav)}
            <AppBar style={{backgroundColor: navbar ? 'white' : 'transparent'}}>
                <Toolbar>
                    <Container>
                    <nav className='navbar'>
                    <Link to='/' className='brand'>Hospital</Link>
                    <div onClick={handleClick} className='menu-icon'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color: 'white'}}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li 
                        className='nav-item'
                        onMouseEnter={mouseEnter1}
                        onMouseLeave={mouseLeave1}
                        >
                            <Link to='/about/history' className='nav-links' onClick={closeMobileMenu}>
                                About <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown1 && <AboutDropdown />}
                        </li>
                        <li 
                        className='nav-item'
                        onMouseEnter={mouseEnter2}
                        onMouseLeave={mouseLeave2}
                        >
                            <Link to='/medical/residential' className='nav-links' onClick={closeMobileMenu}>
                                Medical Team <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown2 && <MedicalDropdown />}
                        </li>
                        <li 
                        className='nav-item'
                        onMouseEnter={mouseEnter3}
                        onMouseLeave={mouseLeave3}
                        >
                            <Link to='/services/cardiology' className='nav-links' onClick={closeMobileMenu}>
                                Services <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown3 && <ServicesDropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact 
                            </Link>

                        </li>
                    </ul>
                    </nav>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    )
} 

export default Navbar
