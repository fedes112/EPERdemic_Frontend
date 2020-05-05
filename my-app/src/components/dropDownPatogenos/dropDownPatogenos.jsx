import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./dropDownPatogenos.css";
import { connect } from "react-redux";

const DropDownPatogenos = ({ pathogens, register, setValue }) => {
  return (
    <DropdownButton
      className="dropdown-pathogen-button"
      style={{ width: "-webkit-fill-available", marginBottom: "0.75rem" }}
      id="dropdown-basic-button"
      title="Patogenos"
    >
      {pathogens.map((pathogen, index) => (
        <Dropdown.Item
          key={(pathogen, index)}
          ref={register}
          name="patogeno"
          eventKey={pathogen.tipo}
          onSelect={(tipo) => setValue("patogeno", tipo)}
        >
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
