import React, { useState } from 'react'
import { AppBar, Container, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
// import { MedicalDropdown, ServicesDropdown} from './Dropdown'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    // const [dropdown1, setDropdown1] = useState(false)
    // const [dropdown2, setDropdown2] = useState(false)
    // const [dropdown3, setDropdown3] = useState(false)
    const closeMobileMenu = () => setClick(false)

    // const mouseEnter1 = () => {
    //     window.innerWidth < 900 ? setDropdown1(true) : setDropdown1(true)
    // }
    // const mouseEnter2 = () => {
    //     window.innerWidth < 900 ? setDropdown2(true) : setDropdown2(true)
    // }
    // const mouseEnter3 = () => {
    //     window.innerWidth < 900 ? setDropdown3(true) : setDropdown3(true)
    // }

    // const mouseLeave1 = () => {
    //     window.innerWidth < 900 ? setDropdown1(false) : setDropdown1(false)
    // }
    // const mouseLeave2 = () => {
    //     window.innerWidth < 900 ? setDropdown2(false) : setDropdown2(false)
    // }
    // const mouseLeave3 = () => {
    //     window.innerWidth < 900 ? setDropdown3(false) : setDropdown3(false)
    // }

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
                    <Link to='/' className='brand'>Ola Catholic</Link>
                    <div onClick={handleClick} className='menu-icon'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color: 'white'}}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/locations' className='nav-links' onClick={closeMobileMenu}>
                                Hospital Locations
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/department' className='nav-links' onClick={closeMobileMenu}>
                                Department
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/midwifery' className='nav-links' onClick={closeMobileMenu}>
                                School of Midwifery
                            </Link>

                        </li>
                        {/* <li 
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
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact 
                            </Link>

                        </li>
                        <li>
                        <Button
                        variant='contained'
                        type='button'
                        style={{
                            marginTop: '1.5rem',
                            textTransform: 'inherit',
                            marginLeft: '1rem',
                        }}
                        // color='primary'
                        >
                            <Link
                            to='/login'
                            className='try'
                            >
                                Sign In
                            </Link>
                        </Button>
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
