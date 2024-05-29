import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/Home';
import BasicTable from './components/Table';
import CreateTransaction from './components/CreateTransaction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction-list" element={<BasicTable />} />
        <Route path="/create-transaction" element={<CreateTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;