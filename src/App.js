import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "Text Formatters" about = "AboutUs"/>
      <div className= "container  my-3">

      <TextForm heading = "Enter text below"/>
      <AboutUs/>
      </div>
    </>
  );
}

export default App;
