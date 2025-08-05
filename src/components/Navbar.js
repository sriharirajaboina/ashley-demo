import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar({anchorEl,handleMenuClick,handleClose}) {


  const pages = ["Homepage", "Portfolio", "Services", "Newsletter", "Other Pages"];

  return (
    <>
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "black" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          A.
        </Typography>
        <div>
         {!anchorEl ? <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>:
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>}
        </div>
      </Toolbar>
    </AppBar>
    {anchorEl && <div className="container7" style={{width:"100%",height:"100%",padding:"50px"}}>
               <h2>HomePage</h2>
               <h2>Portfolio</h2>
               <h2>Service</h2>
               <h2>Newsletter</h2>
               <h2>other Pages</h2>
        </div>}
    </>
  );
}
