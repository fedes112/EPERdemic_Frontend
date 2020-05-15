import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Especie from "./resources/especie.png";
import { connect } from "react-redux";
import { useGet } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";

const InformacionDeEspecie = ({ selected_species }) => {
  return (
    <Card className="m-2 shadow">
      <InfoEspecieHeader />
      <Image
        fluid
        style={{ alignSelf: "center", height: "275px", width: "283px" }}
        src={Especie}
      />
      <InfoEspecieBody selected_species={selected_species} />
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

const InfoEspecieBody = ({ selected_species }) => {
  const [cantidadInfectados, setCantidadInfectados] = useState(-1);

  useEffect(() => {
    if (Object.keys(selected_species).length !== 0) {
      console.log("Getting DATA:", selected_species.nombre);
      getCantidadInfectados();
    }
  }, [selected_species]);

  const getCantidadInfectados = useGet(
    CLIENT_SERVER,
    "Solicitud mandada",
    "Hubo un problema con la solicitud D:",
    `/patogeno/infectados/${selected_species.nombre}`,
    setCantidadInfectados
  );

  return (
    <Card.Body style={{ paddingTop: "0px" }}>
      {selected_species.nombre === undefined ? (
        <Card.Title style={{ color: "#007bff" }}>
          Especie no seleccionada!
        </Card.Title>
      ) : (
        <div>
          <Card.Title style={{ color: "#007bff" }}>
            Nombre de la Especie:
            <div
              style={{ display: "inline-block", paddingLeft: "10px" }}
              className="text-muted"
            >
              {selected_species.nombre}
            </div>
          </Card.Title>
          <Card.Title style={{ color: "#007bff" }}>
            Pais de origen:
            <div
              style={{ display: "inline-block", paddingLeft: "10px" }}
              className="text-muted"
            >
              {selected_species.paisDeOrigen}
            </div>
          </Card.Title>
        </div>
      )}
      <Card.Text>
        <div style={{ display: "inline-block" }}>
          Cantidad de vectores infectados:
        </div>
        <div
          style={{ display: "inline-block", paddingLeft: "10px" }}
          className="text-muted"
        >
          {cantidadInfectados !== -1
            ? cantidadInfectados
            : "Especie sin seleccionar"}
        </div>
      </Card.Text>
    </Card.Body>
  );
};

const mapStateToProps = (state) => ({
  selected_species: state.backend.selected_species,
});

export default connect(mapStateToProps)(InformacionDeEspecie);
