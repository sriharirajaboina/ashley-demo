import React,{useState} from "react";
import './App.css';
import Demo from "./components/Demo"
import Navbar from './components/Navbar'

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
      
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="App">
      <Navbar anchorEl={anchorEl} handleMenuClick={handleMenuClick} 
      handleClose ={handleClose}/>
      {!anchorEl && <div style={{ marginTop: "70px" }}>
        <Demo/>
      </div>}
    </div>
  );
}

export default App;
