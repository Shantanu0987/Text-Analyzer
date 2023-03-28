// import logo from './logo.svg';
import { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from 'react';



function App() {
  const [mode,setMode] = useState ("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert  ({
        message : message,
        type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.textColor = 'black';
      showAlert("DarkMode has been Enabled", " Success");
      
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.textColor = 'white';
      showAlert("LightMode has been Enabled", " Success");
     
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
  <Navbar title="Text-Analyzer" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
    {/* <Routes> */}
      {/* <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />} /> */}
      {/* <Route exact path='/about' element={<About/>} /> */}
      <Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />
  </div>
      {/* <About/> */}
  {/* </Routes> */}
  {/* </BrowserRouter> */}
    </>
  );
}

export default App;
