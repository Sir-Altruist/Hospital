import React from 'react'
import { Box, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Upload = () => {
    return (
        <Box component='div'>
            <Typography variant='h4' align='center' sx={{paddingTop: '10rem', fontWeight: 'bold'}}>
                Click the icon below to download your result
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem'}}>
            <input
            accept='images/*'
            id='raised-button-file'
            multiple
            type='file'
            hidden 
            />
            <label htmlFor='raised-button-file'>
                <CloudUploadIcon  className='download' color='primary' 
                sx={{ fontSize: '10rem', cursor: 'pointer'}}  />
            </label>
            </div>
        </Box>
    )
}

export default Upload
