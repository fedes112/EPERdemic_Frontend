import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./dropDownPatogenos.css";
import { connect } from "react-redux";
import { updateSelectedPathogen } from "../../redux/actions/backendPathogensActions";
import { useState } from "react";

const DropDownPatogenos = ({
  pathogens,
  register,
  setValue,
  selected_pathogen,
  updateSelectedPathogen,
}) => {
  const [especiePatogenos, setEspeciePatogenos] = useState();
  const handleUpdate = (pathogen) => {
    updateSelectedPathogen({
      pathogen: pathogen.id,
      pathogen_name: pathogen.tipo,
    });
    setEspeciePatogenos(pathogen.tipo);
  };

  return (
    <DropdownButton
      className="dropdown-pathogen-button"
      style={{ width: "-webkit-fill-available", marginBottom: "0.75rem" }}
      id="dropdown-basic-button"
      title={especiePatogenos || "Patogenos"}
    >
      {pathogens.map((pathogen, index) => (
        <Dropdown.Item
          key={(pathogen, index)}
          onClick={() => handleUpdate(pathogen)}
        >
          {pathogen.tipo}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedPathogen: (data) => {
      dispatch(updateSelectedPathogen(data));
    },
  };
};

const mapStateToProps = (state) => ({
  pathogens: state.client.pathogens,
  selected_pathogen: state.backend.selected_pathogen,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownPatogenos);
