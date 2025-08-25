import React,{useState,useRef} from "react";
import './App.css';
import {Routes,Route,useLocation} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Homepage from "./components/Homepage/Homepage";
import Studio from "./components/studio/Studio"
import Ideas from "./components/ideas/Ideas"
import Team from "./components/team/Team"
import Customers from "./components/customers/Customers";
import Publications from "./components/Publications/Publications";
import Footer from "./components/footer/Footer"
import Service from "./components/Service-home/Service";
import Portfolio from "./components/portfolio/Portfolio"
import Teammeet from "./components/team-meat/Team-meet";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextpageRef=useRef(null)
    const toggleMenu=()=>{
        setMenuOpen(false)
    }
    const handleClickMenu=(event)=>{
        setMenuOpen(true)
    }
    const scrollToTeam=()=>{
        nextpageRef.current?.scrollIntoView({behavior: "smooth"})
    }
  return (
    <div className="App">
      <Navbar/>
      {!menuOpen && <div>
        <Routes>
          <Route path="/" element={<Homepage scrollToTeam={scrollToTeam}/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        <Routes>
          <Route path="/" element={<Studio/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Ideas/>}/>
          <Route path="/service" element={<Service/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Team/>}/>
            <Route path="/teammeet" element={<Teammeet/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Customers/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Publications/>}/>
        </Routes>  
        <Routes>
          <Route path="/" element={<Footer/>}/>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
