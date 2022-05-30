import React from 'react';
import './App.css';
import {FormInput} from "./Form/FormInput";
import {Nav} from './Nav/Nav';
import {Route, Routes} from "react-router-dom";
import {Landing} from './LandingPage/Landing'
import {Contact} from './ContactPage/Contact';
import {About} from './AboutPage/About';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Routes>
            <Route path='/FormInput' element={<FormInput/>}/>
            <Route path='/Landing' element={<Landing/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>

        </Routes>
    </div>
  );
}

export default App;
