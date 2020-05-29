import React from "react";
import { connect } from "react-redux";
import { Image, Table, Row, Col } from "react-bootstrap";
import Mundo from "./resources/mundo.png";

const UbicacionRow = ({ data }) => {
  return (
    <tr>
      <td>{data.nombreDelEquipo}</td>
      <td>{data.nombreDeUbicacion}</td>
      <td>{data.vectoresPresentes}</td>
      <td>{data.vectoresInfecatods}</td>
      <td>{data.nombreDeEspecieMasInfecciosa}</td>
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

const UbicacionesLeaderboard = ({ reports }) => {
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
              reports[i] ? <UbicacionRow data={reports[i]} /> : <RowVacia />
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

const mapStateToProps = (state) => ({
  reports: state.reports.backendReports,
});

export default connect(mapStateToProps)(UbicacionesLeaderboard);
