import React,{useState,useRef} from "react";
import './App.css';
import {Routes,Route,useLocation} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Homepage from "./components/Homepages/HomePage/Homepage";
import Studio from "./components/studios/studio/Studio"
import Ideas from "./components/ideas/idea/Ideas"
import Team from "./components/team/teams/Team"
import Customers from "./components/customers/Customers";
import Publications from "./components/Publications/Publication/Publications";
import Footer from "./components/footer/Footer"
import Services from "./components/Homepages/Services-home/Services";
import Portfolio from "./components/Homepages/portfolio/Portfolio"
import Teammeet from "./components/team/team-meat/Team-meet";
import Website from "./components/ideas/service-services/website"
import Blog from "./components/Publications/blog/Blog";
import Blogs from "./components/Publications/view-blog/Blogs";

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
          <Route path="/services-home" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        <Routes>
          <Route path="/" element={<Studio/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Ideas/>}/>
          <Route path="/services-serv" element={<Services/>}/>
          <Route path="/service" element={<Website/>}/>
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
          <Route path="/view-blog" element={<Blogs/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>  
        <Routes>
          <Route path="/" element={<Footer/>}/>
        </Routes>
      </div>}
    </div>
  );
}

export default App;
