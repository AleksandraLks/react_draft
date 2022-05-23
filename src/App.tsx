import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormInput} from "./Form/FormInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  style={{ height: 200, position:"absolute",top:5}} className="App-logo" alt="logo" />
          <FormInput/>
      </header>
    </div>
  );
}

export default App;
