import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../logo/Logo"
import Menu from "../menu/menu"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Logo/>
        <Menu/>
      </nav>
     
    </>
  );
}
