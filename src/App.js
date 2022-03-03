import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alertBtn, setalertBtn] = useState(null)

  const showAlert = (message, type) => {
    setalertBtn({
      message: message,
      type: type
    })
    setTimeout(()=>{
     setalertBtn(null);
    },1500)
  }

  const darkModeBtn = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0e1430'
      showAlert("Dark mode enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextChanger" mode={mode} darkModeBtn={darkModeBtn} aboutText="About"/>
      <Alert alertBtn={alertBtn} />
      <div className='container my-3' >
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/"
      element={<TextForm heading="Enter the Text here to Analyse" mode={mode} showAlert={showAlert}  />}
          />
        </Routes> 
      </div>
       </Router>
    </>
  );
}

export default App;
