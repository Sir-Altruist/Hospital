import React, { useState, useEffect } from 'react'
import { 
    Dialog, 
    DialogContent, 
    DialogTitle,
    Box,
    Divider,
    CircularProgress,
    Typography
 } from '@mui/material'



const Circular = (props) => {
    return (
        <Box
        sx={{
            width: '20rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
          <CircularProgress variant="determinate" {...props} /><br />
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    )
}


const VideoModal = ({ close2, open2 }) => {

    const [progress, setProgress] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        //clean-up function
        return () => clearInterval(timer);
    }, [])

    return (
        <Box component='div'>
            <Dialog
            open={open2} 
            onClose={close2} 
            >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                 <DialogTitle>Video Call</DialogTitle>
                 <DialogTitle><i className='fas fa-times' onClick={close2} style={{cursor: 'pointer'}}></i></DialogTitle>
                 </div>
                 <Divider />

                 <DialogContent sx={{
                     margin: '5rem auto'
                 }}>
                     <i className='fas fa-user'>

                         </i>
                     <Circular value={progress} />
                     <Typography align='center' sx={{pt:3}}>Connecting. <br />Please wait...</Typography>
                 </DialogContent>
            </Dialog>
        </Box>
    )
}

export default VideoModal
