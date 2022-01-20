import React, { useState, forwardRef } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { 
    // DialogContent, 
    DialogTitle, 
    Box, 
    Dialog, 
    Button, 
    Slide, 
    Divider,
    DialogContent,
    // TextField,
    // FormControl,
    // MenuItem,
    // Select,
    // InputLabel,
    // TextareaAutosize,
    // Typography
} from '@mui/material'
import Physical from '../../assets/images/physical-new.png'
import Remote from '../../assets/images/remote-new.png'
import PopModal from './PopModal';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
})

const AppModal = ({ close, open }) => {

  const [popOpen, setPopOPen] = useState(false)
  const handlePopOPen = () => {
    setPopOPen(true)
  }
  const handlePopClose = () => {
    setPopOPen(false)
  }

    //responsive dialogue box
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
      <>
        <Box component='div'>
             <Dialog 
                open={open} 
                onClose={close}
                TransitionComponent={Transition}
                scroll={'paper'}
                fullScreen={fullScreen}
                keepMounted
                aria-describedby="alert-dialog-slide-description" 
                maxWidth='md' 
             >
                 <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                 <DialogTitle sx={{fontWeight: '600'}}>Book an Appointment</DialogTitle>
                 <DialogTitle><i className='fas fa-times' onClick={close} style={{cursor: 'pointer'}}></i></DialogTitle>
                 </div>
        <Divider />
        <DialogContent>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginLeft: '6rem', marginBottom: '3rem'}}>
          <div style={{ marginTop: '1rem'}}>
            <img src={Physical} width='300' alt='physical' />
            <Button onClick={close} variant='contained' color='info' onClick={handlePopOPen}>In-Person Appointment</Button>
          </div>
          <div>
            <img src={Remote} width='300' alt='remote' />
          <Button onClick={close} variant='contained' color='success'>Virtual Appointment</Button>
          </div>
          </div>
        </DialogContent>
      </Dialog>
        </Box>
          <PopModal open1={popOpen} close1={handlePopClose} />
          </>
    )
}

export default AppModal
