import React from 'react'
import { Typography } from '@mui/material'

const Location = ({ single }) => {
    return (
        <div style={{display: 'flex', marginRight: '2rem'}}>
            <span>{single.icon}</span>
            <Typography variant='h6' sx={{ paddingLeft: '.5rem', paddingTop: '.1rem'}}>{single.name}</Typography>
        </div>
    )
}

export default Location
