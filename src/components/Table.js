import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import { getAllTransactions, createTransaction } from "../api/apiClient";
// import TrendingUpIcon from "@material-ui/icons/TrendingUp";
// import TrendingDownIcon from "@material-ui/icons/TrendingDown";

const columns = [
  {
    name: 'date',
    label: 'Date',
  },
  {
    name: 'voucherNumber',
    label: 'Voucher Number',
  },
  {
    name: 'voucherType',
    label: 'Voucher Type',
  },
  {
    name: 'amount',
    label: 'Amount',
  },
  {
    name: 'refHead',
    label: 'Ref Head',
  },
];

const renderDRorCR = (value) => {
  if (value === "DR") {
    // return <TrendingDownIcon style={{ color: "red" }} />;
  } else if (value === "CR") {
    // return <TrendingUpIcon style={{ color: "green" }} />;
  }
};

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


  const data = transactions;

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    viewColumns: false,
    selectableRows: 'none'
  };

  return (
    <MUIDataTable
      title={"Transaction List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}