import React, { useState } from 'react';
import { modal } from './style'
import { Card, CardContent, Stack, Typography, Button, Box} from '@mui/material';

/**
 * Modal that pops up when submit is clicked
 */
function ConfirmationCard({ address, amount, otp, setSubmit, submitted, handleClose }) {
  const [confirmationMessage, setConfirmationMessage] = useState('Are these correct?')
  
  // once confirmed, sets message to submitted,
  // sets submitted to true so that when closing modal, fields will be cleared
  const handleConfirm = () =>{
    setConfirmationMessage('Submitted!')
    setSubmit(true)
  }
  return (
    <div>
     <Card sx={modal}>
       <CardContent>
         <Stack
         spacing={1}>
         <Typography variant='h2'>
           {confirmationMessage}
         </Typography>
          <Typography variant='p'>
            <b>ETH Address:</b> {address}
          </Typography>
          <Typography variant='p'>
            <b>Amount:</b> {amount}
          </Typography>
          <Typography variant='p'>
            <b>OTP:</b> {otp}
          </Typography>
          </Stack>
          </CardContent>
         <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>

          {submitted 
          ? <Button variant="contained" onClick={handleClose}>Back</Button> 
          : <Button variant="contained" onClick={handleConfirm}>Confirm</Button>}
          </Box>
        </Card> 
    </div>
  );
}

export default ConfirmationCard;