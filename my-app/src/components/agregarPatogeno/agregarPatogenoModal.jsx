import React from "react";
import AgregarPatogeno from "./agregarPatogeno";
import ModalContainer from "../common/modalContainer";
import { faViruses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AgregarPatogenoModal = () => {
  return (
    <ModalContainer
      buttonText="Agregar Patogeno"
      buttonIcon={<FontAwesomeIcon icon={faViruses} size="2x" />}
      headerText="Agregar Patogeno"
      body={<AgregarPatogeno />}
    />
  );
};

export default AgregarPatogenoModal;
