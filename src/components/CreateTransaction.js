import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTransaction } from '../api/apiClient'; // adjust the path as necessary

export default function TransactionForm() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    amount: '',
    voucherNumber: '',
    voucherType: '',
    refHead: '',
    date: '',
  });

  // Function to update form data on input change
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault(); // Prevent default form submission behavior
     try {
      // Call the createTransaction function with the form data
      const response = await createTransaction(formData);
      console.log('Transaction created:', response);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // Call handleSubmit function on form submission
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="amount"
          label="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange} // Call handleChange function on input change
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="voucherNumber"
          label="Voucher Number"
          type="number"
          value={formData.voucherNumber}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
    </div>
    <div>
        <TextField
          id="voucherType"
          label="Voucher Type"
          value={formData.voucherType}
          onChange={handleChange}
          helperText="eg. Sale, Rcpt"
        />
        <TextField
          id="refHead"
          label="Ref Head"
          value={formData.refHead}
          onChange={handleChange}
          helperText="eg. Cash, Discount"
        />
        <TextField
          id="date"
          label="Date"
          value={formData.date}
          onChange={handleChange}
          helperText="DD/MM/YYYY format ONLY"
        />
      </div>
    <Button variant="contained" type='submit' endIcon={<SendIcon />}>
        Submit
      </Button>
    </Box>
  );
}