import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    const handleListAllTransactions = () => {
        navigate('/transaction-list');
    };

    const handleCreateTransaction = () => {
        navigate('/create-transaction');
    };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleCreateTransaction}>
        Create Transaction
      </Button>
      <Button variant="contained" onClick={handleListAllTransactions}>
        List All Transactions
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete Transaction
      </Button>
    </Stack>
  );
}