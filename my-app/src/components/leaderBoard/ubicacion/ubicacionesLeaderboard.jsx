import React from "react";
import { Image, Table, Row, Col } from "react-bootstrap";
import Mundo from "./resources/mundo.png";

const mockedData = [
  {
    equipo: "Team rocket",
    lugar: "Varela",
    cantidadDeVectores: 2300,
    cantidadDeVectoresInfectados: 2300,
    especie: "Viruela",
  },

  {
    equipo: "A cara de perro",
    lugar: "Glew",
    cantidadDeVectores: 3400,
    cantidadDeVectoresInfectados: 2233,
    especie: "Zombie infection",
  },

  {
    equipo: "Team rocket",
    lugar: "Caballito",
    cantidadDeVectores: 2200,
    cantidadDeVectoresInfectados: 2200,
    especie: "Paperas",
  },

  {
    equipo: "A cara de perro",
    lugar: "Quilmes",
    cantidadDeVectores: 1850,
    cantidadDeVectoresInfectados: 1400,
    especie: "Sarampion",
  },

  {
    equipo: "Compumundo hipermega red",
    lugar: "Bernal",
    cantidadDeVectores: 2823,
    cantidadDeVectoresInfectados: 1345,
    especie: "Hivemind parasite",
  },

  {
    equipo: "Compumundo hipermega red",
    lugar: "Chacarita",
    cantidadDeVectores: 3423,
    cantidadDeVectoresInfectados: 1123,
    especie: "Funguiside",
  },

  {
    equipo: "Compumundo hipermega red",
    lugar: "Villa España",
    cantidadDeVectores: 5323,
    cantidadDeVectoresInfectados: 940,
    especie: "Necronimia",
  },

  {
    equipo: "Team rocket",
    lugar: "La Matanza",
    cantidadDeVectores: 1100,
    cantidadDeVectoresInfectados: 830,
    especie: "Gripe",
  },

  {
    equipo: "A cara de perro",
    lugar: "Barracas",
    cantidadDeVectores: 923,
    cantidadDeVectoresInfectados: 822,
    especie: "Fiebre Amarilla",
  },
];

const UbicacionRow = ({ data }) => {
  return (
    <tr>
      <td>{data.equipo}</td>
      <td>{data.lugar}</td>
      <td>{data.cantidadDeVectores}</td>
      <td>{data.cantidadDeVectoresInfectados}</td>
      <td>{data.especie}</td>
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

const UbicacionesLeaderboard = () => {
  return (
    <Row className="pt-0">
      <Col
        md="10"
        className="pl-0"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Table size="sm" className="mb-0" striped bordered>
          <thead>
            <tr style={{ height: "45px" }}>
              <th>Equipo</th>
              <th>Ubicacion</th>
              <th>Cantidad de vectores</th>
              <th>Vectores infectados</th>
              <th>Especie dominante</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) =>
              mockedData[i] ? (
                <UbicacionRow data={mockedData[i]} />
              ) : (
                <RowVacia />
              )
            )}
          </tbody>
        </Table>
      </Col>
      <Col md="2" className="pr-0" style={{ paddingLeft: "10px" }}>
        <Image
          fluid
          style={{
            paddingRight: "0px",
          }}
          src={Mundo}
        />
      </Col>
    </Row>
  );
};

export default UbicacionesLeaderboard;
