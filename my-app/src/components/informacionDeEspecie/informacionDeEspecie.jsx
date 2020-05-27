import React, { useState, useEffect } from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sample } from "lodash";
import Especie from "./resources/especieNoSeleccionada.png";
import Especie1 from "./resources/especie1.png";
import Especie2 from "./resources/especie2.png";
import Especie3 from "./resources/especie3.png";
import Especie4 from "./resources/especie4.png";
import Especie5 from "./resources/especie5.png";
import { connect } from "react-redux";
import { useGet } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";
/* eslint-disable react-hooks/exhaustive-deps */
const InformacionDeEspecie = ({ selected_species }) => {
  return (
    <Card className="m-2 shadow">
      <InfoEspecieHeader selected_species={selected_species} />

      <InfoEspecieBody selected_species={selected_species} />
    </Card>
  );
};

const InfoEspecieHeader = ({ selected_species }) => {
  const [esPandemia, setEsPandemia] = useState(0);

  useEffect(() => {
    if (Object.keys(selected_species).length !== 0 && false) {
      console.log("Getting DATA:", selected_species.nombre);
      getPandemiaEs();
    }
  }, [selected_species]);

  const getPandemiaEs = useGet(
    CLIENT_SERVER,
    "Solicitud mandada",
    "Hubo un problema con la solicitud D:",
    `/patogeno/esPandemia/${selected_species.id}`,
    setEsPandemia
  );

  return (
    <Card.Header>
      <div className="float-left">Informacion De Especie</div>
      <div className="float-right">
        {esPandemia === 0 ? (
          <div className="pl-2 text-primary float-right"></div>
        ) : (
          <div>
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faExclamationCircle}
            />
            <div className="pl-2 text-primary float-right">Es Pandemia</div>
          </div>
        )}
      </div>
    </Card.Header>
  );
};

const imgEspecies = [Especie1, Especie2, Especie3, Especie4, Especie5];

const EspecieNoEncontrada = () => {
  return (
    <Row style={{ display: "flex", alignItems: "center" }}>
      <Col>
        <Image
          fluid
          style={{
            paddingRight: "0px",
            alignSelf: "center",
            height: "275px",
            width: "275px",
          }}
          src={Especie}
        />
      </Col>
      <Col style={{ paddingLeft: "0px" }}>
        <Card.Title style={{ color: "#007bff" }}>
          <h4>Especie no seleccionada!</h4>
        </Card.Title>
      </Col>
    </Row>
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
    <Card.Body style={{ paddingTop: "0px", paddingLeft: "0px" }}>
      {selected_species.nombre === undefined ? (
        <EspecieNoEncontrada />
      ) : (
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col>
            <Image
              fluid
              style={{
                paddingRight: "0px",
                alignSelf: "center",
                height: "275px",
                width: "275px",
              }}
              src={sample(imgEspecies)}
            />
          </Col>

          <Col style={{ paddingLeft: "0px" }}>
            <Card.Title style={{ color: "#007bff" }}>
              <h3>Nombre de la Especie</h3>
              <div className="text-muted">{selected_species.nombre}</div>
            </Card.Title>
            <Card.Title style={{ color: "#007bff" }}>
              <h4> Pais de origen </h4>
              <div className="text-muted">{selected_species.paisDeOrigen}</div>
            </Card.Title>
            <Card.Text>
              <div style={{ display: "inline-block" }}>
                Cantidad de vectores infectados:
              </div>
              <div
                style={{ display: "inline-block", paddingLeft: "10px" }}
                className="text-muted"
              >
                {cantidadInfectados}
              </div>
            </Card.Text>
          </Col>
        </Row>
      )}
    </Card.Body>
  );
};

const mapStateToProps = (state) => ({
  selected_species: state.backend.selected_species,
});

export default connect(mapStateToProps)(InformacionDeEspecie);
