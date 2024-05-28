import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; // import Table components from Material-UI
import { getAllTransactions } from '../api/apiClient'; // adjust the path as necessary

export default function BasicTable() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTransactions();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  console.log(transactions);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Voucher Type</TableCell>
            <TableCell align="right">Voucher Number</TableCell>
            <TableCell align="right">Ref Head</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.date}>
              <TableCell component="th" scope="row">
                {transaction.date}
              </TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
              <TableCell align="right">{transaction.voucherType}</TableCell>
              <TableCell align="right">{transaction.voucherNumber}</TableCell>
              <TableCell align="right">{transaction.refHead}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}