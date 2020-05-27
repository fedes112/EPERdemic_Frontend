import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./dropDownPatogenos.css";
import { connect } from "react-redux";
import { updateToCreatePathogen } from "../../redux/actions/backendPathogensActions";

const DropDownPatogenos = ({
  pathogens,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  const [patogenoACrear, setPatogenoACrear] = useState();

  const handleCreate = (pathogen) => {
    selectToCreatePathogen({
      pathogen: pathogen.id,
      pathogen_name: pathogen.tipo,
    });
    setPatogenoACrear(pathogen.tipo);
  };

  return (
    <DropdownButton
      className="dropdown-pathogen-button"
      style={{ width: "-webkit-fill-available", marginBottom: "0.75rem" }}
      id="dropdown-basic-button"
      title={pathogen_to_create.pathogen_name || "Patogenos"}
    >
      {pathogens.map((pathogen, index) => (
        <Dropdown.Item
          key={(pathogen, index)}
          onClick={() => handleCreate(pathogen)}
        >
          {pathogen.tipo}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

const mapStateToProps = (state) => ({
  pathogens: state.client.pathogens,
  pathogen_to_create: state.backend.pathogen_to_create,
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectToCreatePathogen: (data) => {
      dispatch(updateToCreatePathogen(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownPatogenos);
