import React, { useState } from 'react'
import { aboutItems, medicalItems, servicesItems } from './menuItems'
import { Link } from 'react-router-dom'

export const AboutDropdown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
        <ul 
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {
                aboutItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export const MedicalDropdown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
        <ul 
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {
                medicalItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export const ServicesDropdown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
        <ul 
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {
                servicesItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

