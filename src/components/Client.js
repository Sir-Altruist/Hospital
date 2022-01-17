import { Typography } from '@mui/material'
import React from 'react'

const Client = ({ client }) => {
    return (
        <>
        <img src={client.img} alt='clients-img' />
        <Typography as='h6' align='center' sx={{ fontWeight: 'bold', paddingTop: '1rem'}}>{client.name}</Typography>
        </>
    )
}

export default Client
