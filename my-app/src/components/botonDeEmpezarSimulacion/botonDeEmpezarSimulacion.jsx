import React from "react";
import { Button } from "react-bootstrap";
import "./botonDeEmpezarSimulacion.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BotonDeEmpezarSimulacion = () => {
  return (
    <Button className="m-2 shadow boton-empezar" variant="primary">
      <div style={{ paddingRight: "30px" }}>
        <FontAwesomeIcon className="play-icon" icon={faPlay} size="2x" />
        <h3 className="empezar-text">Empezar simulación</h3>
      </div>
    </Button>
  );
};

export default BotonDeEmpezarSimulacion;
