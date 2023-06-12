import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Country} from "./components/Country";
function App() {

  return (
    <div className="App">
      <header>Basic RTK query Api CRUD operations</header>
      <main>
        
        <Country />
      </main>
    </div>
  );
}

export default App;
