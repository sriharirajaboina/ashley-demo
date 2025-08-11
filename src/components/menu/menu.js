import React,{useState} from "react"
import "./Menu.css"

const Menu=({menuOpen,toggleMenu,handleClickMenu})=>{
    return (
        <>
        <nav className="navbar">
          {!menuOpen ?
            <div className="icon" onClick={handleClickMenu}> 
               <span>&#9776;</span>
            </div>:
            <div className="icon" onClick={toggleMenu}>
                <span>&#10006;</span>
            </div>}
      </nav>
       {menuOpen && (
        <div className="menu">
          <h2>Homepage</h2>
          <h2>Portfolio</h2>
          <h2>Services</h2>
          <h2>Newsletter</h2>
          <h2>Other Pages</h2>
        </div>
      )}
        </>
    )
}
export default Menu