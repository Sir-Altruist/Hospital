import React from 'react'
import { Card, Typography, Container, CardContent, Avatar } from '@mui/material'


export default function Testimonials({ single }) {
    return (
        <Card sx={{ width: '40%' ,borderRadius: '5%', margin: '0 auto'}} elevation={2}>
            <Container>
            <CardContent>
            <Typography variant='body2' color='textSecondary' sx={{ paddingTop: '3rem'}}>{single.content}</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '2rem'}}>
            <Avatar src={single.img} alt='identity' sx={{marginTop: '2rem'}} />
            <div style={{marginLeft: '2rem', marginTop: '2rem'}}>
            <Typography variant='h6' sx={{ fontWeight: 'bold'}}>{single.name}</Typography>
            </div>
            </div>
            </CardContent>
            </Container>
        </Card>
    )
}


