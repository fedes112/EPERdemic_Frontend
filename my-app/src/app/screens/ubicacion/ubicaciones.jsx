import React from "react";
import { Card, Container, Table } from "react-bootstrap";

const Ubicaciones = () => {
  return (
    <Container fluid>
      <Card className="m-5 shadow">
        <Card.Header className="text-center" style={{ fontWeight: "bold" }}>
          Ranking Ubicaciones
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pais Origen</th>
                <th>Cantidad de Vectores Infectados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Argentina</td>
                <td>Brasil</td>
              </tr>
              <tr>
                <td>11111111</td>
                <td>22222222</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Ubicaciones;
