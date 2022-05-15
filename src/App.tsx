import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleShowAlert=()=>{
    alert("Hello React!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleShowAlert}> Show Alert</button>
        <a
        className="App-link"
        href="https://github.com/AleksandraLks"
        target="_blank"
        >Git</a>

      </header>
    </div>
  );
}

export default App;
