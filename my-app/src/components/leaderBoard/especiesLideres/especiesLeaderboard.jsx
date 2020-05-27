import React from "react";
import { Image, Table, Row, Col } from "react-bootstrap";
import Persona from "./resources/persona.png";

const mockedData = [
  {
    especie: "Paperas",
    patogeno: "Virus",
    cantidadDeVectoresInfectados: 2300,
    ubicacionMasInfectada: "Varela",
    esPandemia: "No",
  },
  {
    especie: "Tuberculosis",
    patogeno: "Bacteria",
    cantidadDeVectoresInfectados: 2100,
    ubicacionMasInfectada: "Caballito",
    esPandemia: "Si",
  },
  {
    especie: "Chiripioca",
    patogeno: "Bacteria",
    cantidadDeVectoresInfectados: 1830,
    ubicacionMasInfectada: "Glew",
    esPandemia: "Si",
  },
  {
    especie: "Zapatarata",
    patogeno: "Parasito",
    cantidadDeVectoresInfectados: 1700,
    ubicacionMasInfectada: "Quilmes",
    esPandemia: "No",
  },
  {
    especie: "Zomboid",
    patogeno: "Parasito del nuevo mundo",
    cantidadDeVectoresInfectados: 1300,
    ubicacionMasInfectada: "Villa Luro",
    esPandemia: "Si",
  },
  {
    especie: "Fiebre Amarilla",
    patogeno: "Virus",
    cantidadDeVectoresInfectados: 834,
    ubicacionMasInfectada: "Palermo",
    esPandemia: "No",
  },
  {
    especie: "Ritmo rojo",
    patogeno: "Virus",
    cantidadDeVectoresInfectados: 712,
    ubicacionMasInfectada: "Ghana",
    esPandemia: "No",
  },

  {
    especie: "Dengue",
    patogeno: "Virus",
    cantidadDeVectoresInfectados: 637,
    ubicacionMasInfectada: "Ranela",
    esPandemia: "Si",
  },
];

const EspecieRow = ({ data }) => {
  return (
    <tr>
      <td>{data.especie}</td>
      <td>{data.patogeno}</td>
      <td>{data.cantidadDeVectoresInfectados}</td>
      <td>{data.ubicacionMasInfectada}</td>
      <td>{data.esPandemia}</td>
    </tr>
  );
};

const RowVacia = () => {
  return (
    <tr style={{ height: "33px" }}>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

const EspeciesLeaderboard = () => {
  return (
    <Row className="pt-0">
      <Col md="2" className="pr-0" style={{ paddingLeft: "10px" }}>
        <Image
          fluid
          style={{
            paddingRight: "0px",
          }}
          src={Persona}
        />
      </Col>
      <Col md="10" style={{ paddingLeft: "20px" }}>
        <Table size="sm" className="mb-0" striped bordered>
          <thead>
            <tr style={{ height: "45px" }}>
              <th>Especie</th>
              <th>Patogeno</th>
              <th>Vectores infectados</th>
              <th>Ubicacion mas infectada</th>
              <th>Es Pandemia</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) =>
              mockedData[i] ? <EspecieRow data={mockedData[i]} /> : <RowVacia />
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default EspeciesLeaderboard;
