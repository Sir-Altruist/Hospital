import React from 'react'
import FileSaver from 'file-saver'
import { Box, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import './dashboard.css'



const Result = () => {

    const downloadFile = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "/resource/Gurama2015.pdf",
            "Result.pdf"); 
    }
    return (
        <Box component='div' style={{ width: '100%', minHeight: '100vh'}}>
            <Typography variant='h4' align='center' sx={{paddingTop: '10rem', fontWeight: 'bold'}}>
                Click the icon below to download your result
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem'}}>
                <CloudDownloadIcon onClick={downloadFile} 
                className='download' color='primary' 
                sx={{ fontSize: '10rem', cursor: 'pointer'}} 
                />
            </div>
        </Box>
    )
}

export default Result
