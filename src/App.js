import React, {useState} from 'react'
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode ] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b1629';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = "Text Formatters" mode={mode} togglemode={toggleMode} about = "AboutUs"/>
      <div className= "container  my-3">

      <TextForm heading = "Enter A Text To Analyse Below" mode={mode}/>
      {/* <AboutUs/> */}
      </div>
    </>
  );
}

export default App;
