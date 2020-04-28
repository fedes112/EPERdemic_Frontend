import React from "react";
import { Navbar } from "react-bootstrap";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EPERdemicNavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <FontAwesomeIcon
        style={{ color: "white", paddingRight: "10px" }}
        icon={faBiohazard}
        size="2x"
      />
      <Navbar.Brand href="#home">NombreDelEquipo</Navbar.Brand>
      <Navbar.Brand href="#home">Rankings</Navbar.Brand>
    </Navbar>
  );
}

export default EPERdemicNavBar;
