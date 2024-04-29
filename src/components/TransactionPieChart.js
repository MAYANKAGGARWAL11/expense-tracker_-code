import React, { useContext, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { GlobalContext } from '../context/GlobalState';

const TransactionPieChart = () => {
  const { transactions } = useContext(GlobalContext);

  // Filter out expense transactions
 
  const expenseTransactions = transactions.filter(transaction => transaction.amount < 0);

  // Calculate total expense
  const totalExpense = expenseTransactions.reduce((total, transaction) => total + transaction.amount, 0) * -1;

  // Prepare data for the pie chart
  const pieChartData = expenseTransactions.map((transaction, index) => ({
    title: index,
    value: Math.abs(transaction.amount), // use absolute value
    color: getRandomColor()
  }));
  console.log(pieChartData) ;
  // Function to generate random colors
  function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Return color in hex format
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  }

  return (
    <div>
      <h3>Expense Breakdown</h3>
      <PieChart
        data={pieChartData}
        label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
        labelStyle={{
          fontSize: '8px',
          fontFamily: 'sans-serif'
        }}
      />
      
    </div>
  );
};

export default TransactionPieChart;
