import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./dropDownPatogenos.css";
import { connect } from "react-redux";

const DropDownPatogenos = ({ pathogens }) => {
  return (
    <DropdownButton
      className="dropdown-pathogen-button"
      style={{ width: "-webkit-fill-available", marginBottom: "0.75rem" }}
      id="dropdown-basic-button"
      title="Patogenos"
    >
      {pathogens.map((pathogen) => (
        <Dropdown.Item href={`#/${pathogen.tipo}`}>
          {pathogen.tipo}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

const mapStateToProps = (state) => ({
  pathogens: state.client.pathogens,
});

export default connect(mapStateToProps)(DropDownPatogenos);
