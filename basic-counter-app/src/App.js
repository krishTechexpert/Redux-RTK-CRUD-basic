import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/Account';
import {Bonus} from './components/Bonus';
import {useSelector} from 'react-redux';
function App() {
  const amount=useSelector((state) => state.account.amount)
  const points=useSelector((state) => state.bonus.points)
  const account=useSelector((state) => state.account);

  return (
    <div className="App">
      <header>basic counter app using Redux</header>
      <main>
        {account.pending?<p className='pending'>Pending...</p>:
        account.error?<p className='error'>{account.error}</p> :
        <h2>Total Amount: {amount}</h2>
         
        }
         <h2>Total points: {points}</h2>
        <Account/>
        <Bonus />
      </main>
    </div>
  );
}

export default App;
