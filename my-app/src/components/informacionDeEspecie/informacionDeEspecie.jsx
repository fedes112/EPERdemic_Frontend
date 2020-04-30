import React from "react";
import { Card, Image } from "react-bootstrap";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Especie from "./resources/especie.png";

const InformacionDeEspecie = () => {
  return (
    <Card className="m-2 shadow">
      <InfoEspecieHeader />
      <Image
        fluid
        style={{ alignSelf: "center", height: "275px", width: "283px" }}
        src={Especie}
      />
      <InfoEspecieBody />
    </Card>
  );
};

const InfoEspecieHeader = () => {
  return (
    <Card.Header>
      <div className="float-left">Informacion De Especie</div>
      <div className="float-right">
        <FontAwesomeIcon style={{ color: "red" }} icon={faExclamationCircle} />
        <div className="pl-2 text-primary float-right">Es Pandemia</div>
      </div>
    </Card.Header>
  );
};

const InfoEspecieBody = () => {
  return (
    <Card.Body style={{ paddingTop: "0px" }}>
      <Card.Title style={{ color: "#007bff" }}>
        Los Millones de Ronny
      </Card.Title>
      <Card.Text>
        <div style={{ display: "inline-block" }}>
          Cantidad de vectores infectados:
        </div>
        <div
          style={{ display: "inline-block", paddingLeft: "10px" }}
          className="text-muted"
        >
          200.100.233
        </div>
      </Card.Text>
    </Card.Body>
  );
};

export default InformacionDeEspecie;
