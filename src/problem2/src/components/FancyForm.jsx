import React, { useState } from 'react';
import { TextField, Card, CardContent, Stack, Button, Typography, Modal } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { ethers } from "ethers";
import mainTheme from '../theme';
import { mainCard } from './style'
import ConfirmationCard from './ConfirmationCard';

/**
 * Main form
 */

function FancyForm() {
  // states related to form
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmit] = useState(false)

  //  states related to modal
  const [open, setOpen] = React.useState(false);

  // closes modal, resets fields if function is called after a submission,
  // otherwise it just closes the modal
  const handleClose = () => {
    if (submitted){
      setAddress('');
      setAmount('');
      setOtp('');
      setSubmit(false)
    }
    setOpen(false);
  }

  // updates address value
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  // updates amount value
   const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  // updates otp value
   const handleOtp = (e) => {
    setOtp(e.target.value)
  }

  // submits form
  const handleSubmit = (e) =>{
    e.preventDefault();

    // ensure all fields are filled in
    if(address === '' || amount === '' || otp === ''){
      setError(true);
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // ensure that address is valid
    if (!(ethers.utils.isAddress(address))){
      setError(true);
      setErrorMessage('Invalid address. Please make sure that the address is valid.');
      return
    }

    // ensure amount is greater than 0
    if (amount <= 0){
      setError(true);
      setErrorMessage('Please enter an amount more than 0');
      return
    }

    // opens confirmation modal
    setOpen(true);

  }
  return (
    <div>
    <Card sx={mainCard}>
      <CardContent>
        <Stack
        spacing={2}
        >
      <TextField fullWidth id="input-address" label="ETH Address" variant="outlined" onChange={handleAddress} value={address} />

      <TextField fullWidth id="input-amount" label="Amount to send" variant="outlined" type="number" min="0" onChange={handleAmount} value={amount}/>

      <TextField fullWidth id="input-otp" label="OTP Authentication" variant="outlined" type="number" onChange={handleOtp} value={otp}/>

      <Button variant="contained" endIcon={<SendRoundedIcon />} onClick={handleSubmit} >Send</Button>

      {error && <Typography color={mainTheme.palette.error.main} variant="p" sx={{textAlign: 'center'}}>{ errorMessage }</Typography>}

      </Stack>
      </CardContent>
    </Card>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConfirmationCard 
        address={address}
        amount={amount}
        otp={otp}
        setSubmit={setSubmit}
        submitted={submitted}
        handleClose={handleClose}
        />
      </Modal>

      </div>

  );
}

export default FancyForm;