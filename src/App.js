import React, { Component } from 'react';
import Navbar from './components/navbar';
import Pizza from './components/pizza';
import Menu from './components/menu';
import './App.css';

function App() {
  return(
    <div className="App">
      <Navbar/>  
      <Pizza/>
      <Menu/>
    </div>
  );
}

export default App;
