import React from "react";
import { Card, Image } from "react-bootstrap";
import "./informacionDeEspecie.css";
import Especie from "./resources/especie.png";

const InformacionDeEspecie = () => {
  return (
    <Card className="m-2 shadow">
      <Card.Header>
        <div className="informacion-de-especie-text">
          Informacion De Especie
        </div>
        <div className="es-pandemia-container">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Exclamation_flat_icon.svg/1200px-Exclamation_flat_icon.svg.png"
          />
          <div className="es-pandemia-text">Es Pandemia</div>
        </div>
      </Card.Header>
      <Image
        fluid
        style={{ alignSelf: "center", height: "283px", width: "283px" }}
        src={Especie}
      />
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
    </Card>
  );
};

export default InformacionDeEspecie;
