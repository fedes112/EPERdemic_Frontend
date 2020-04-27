import React from "react";
import { Navbar } from "react-bootstrap";
import "./eperdemicNavBar.css";

function EPERdemicNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <img
        alt=""
        src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png"
        className="d-inline-block align-top"
      />
      <Navbar.Brand href="#home">NombreDelEquipo</Navbar.Brand>
      <Navbar.Brand href="#home">Rankings</Navbar.Brand>
    </Navbar>
  );
}

export default EPERdemicNavBar;
