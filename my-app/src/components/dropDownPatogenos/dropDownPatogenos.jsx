import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./dropDownPatogenos.css";

const DropDownPatogenos = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Patogenos">
      <Dropdown.Item href="#/action-1">Hongo</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Virus</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Bacteria</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDownPatogenos;
