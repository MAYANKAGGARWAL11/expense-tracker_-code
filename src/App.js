import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import TransactionPieChart from './components/TransactionPieChart';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Advice from './components/Advice';

import Home from './components/Home';

function App() {
  return (
    <Router>
 
    <GlobalProvider>
    <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </GlobalProvider>
  
    </Router>
  );
}

export default App;
