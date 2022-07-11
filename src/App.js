// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import  Navbar from   './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');



  const toggleMode =()=>{
   if(mode==='light'){
    setMode ('dark');
    document.body.style.backgroundColor='rgb(23 51 86)'
   }
   else{
    setMode ('light')
    document.body.style.backgroundColor='white'
   }
  }
  return (
    <>
   <BrowserRouter>
  <Navbar title = "TextUtils "  mode = {mode}  toggleMode={toggleMode}/>
<div className="container my-3">


        { <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes> }
       
    {/* <TextForm heading ="Enter Your Text Here"  mode = {mode} /> */}



</div>
</BrowserRouter>

  </>
  );
}

export default App;
