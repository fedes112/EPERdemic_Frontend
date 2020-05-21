import React from "react";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav_drop_down.css";

function EPERdemicNavBar({ groupName }) {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <FontAwesomeIcon
          style={{ color: "white", paddingRight: "10px" }}
          icon={faBiohazard}
          size="2x"
        />
      </Navbar.Brand>
      <Navbar.Brand>{`${groupName}`}</Navbar.Brand>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  groupName: state.client.groupName,
});

export default connect(mapStateToProps)(EPERdemicNavBar);
