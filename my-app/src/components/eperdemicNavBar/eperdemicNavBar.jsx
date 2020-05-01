import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav_drop_down.css";

function EPERdemicNavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <FontAwesomeIcon
          style={{ color: "white", paddingRight: "10px" }}
          icon={faBiohazard}
          size="2x"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/">NombreDelEquipo</Navbar.Brand>
      <Navbar.Brand>
        <NavDropdown title="Rankings" id="nav-dropdown">
          <NavDropdown.Item href="ubicaciones">Ubicaciones</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Brand>
      <Navbar.Brand href="vectores">Vectores</Navbar.Brand>
    </Navbar>
  );
}

export default EPERdemicNavBar;
