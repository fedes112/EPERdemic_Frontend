import React from "react";
import { Spinner, Image, Table, Row, Col } from "react-bootstrap";
import Persona from "./resources/persona.png";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

const EspecieRow = ({ data }) => {
  return (
    <tr>
      <td>{data.especie_nombre}</td>
      <td>{data.especie_patogeno}</td>
      <td>{data.cantidadInfectados}</td>
      <td>{data.esPandemia === false ? "NO" : "SI"}</td>
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
    </tr>
  );
};

const EspeciesLeaderboard = (especies_lideres) => {
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
      <Col
        md="10"
        style={{ paddingLeft: "20px", display: "flex", alignItems: "center" }}
      >
        {!isEmpty(especies_lideres) ? (
          <Table size="sm" className="mb-0" striped bordered>
            <thead>
              <tr style={{ height: "45px" }}>
                <th>Especie</th>
                <th>Patogeno</th>
                <th>Vectores infectados</th>
                <th>Es Pandemia</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, i) =>
                especies_lideres.especies_lideres[i] ? (
                  <EspecieRow data={especies_lideres.especies_lideres[i]} />
                ) : (
                  <RowVacia />
                )
              )}
            </tbody>
          </Table>
        ) : (
          <Spinner
            variant="primary"
            style={{ margin: "auto" }}
            animation="border"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  especies_lideres: state.client.especies_lideres,
});

export default connect(mapStateToProps)(EspeciesLeaderboard);
