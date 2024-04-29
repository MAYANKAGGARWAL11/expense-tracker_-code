import React from 'react'
import { Header } from './Header'
import { Balance } from './Balance'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'
import Advice from './Advice'
import TransactionPieChart from './TransactionPieChart'
const Home = () => {
  return (
    <div>
    <div style={{display: 'flex' , justifyContent:"space-between" , alignContent:"center"}}>
   
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        
      </div>
     <div className="container" style={{marginLeft:'400px',  paddingRight: '20px' }} >
         <Advice/>
         {/* <TransactionPieChart/> */}
     </div>
    
     </div> 
     
     </div>
    
  )
}

export default Home