import React from "react";
import AgregarEspecie from "./agregarEspecie";
import ModalContainer from "../common/modalContainer";
import { faDisease } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AgregarEspecieModal = () => {
  return (
    <ModalContainer
      buttonText="Agregar Especie"
      buttonIcon={<FontAwesomeIcon icon={faDisease} size="2x" />}
      headerText="Agregar Especie"
      body={<AgregarEspecie />}
    />
  );
};

export default AgregarEspecieModal;
