import React,{useState} from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Homepage from "./components/Homepage/Homepage";
import Studio from "./components/studio/Studio"
import Ideas from "./components/ideas/Ideas"
import Team from "./components/team/Team"
import Customers from "./components/customers/Customers";
import Publications from "./components/Publications/Publications";
import Footer from "./components/footer/Footer"
import Service from "./components/Service-home/Service";
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
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/service" element={<Service/>}/>
        </Routes>
        <Studio/>
        <Ideas/>
        <Team/>
        <Customers/>
        <Publications/>
        <Footer/>
      </div>}
    </div>
  );
}

export default App;
