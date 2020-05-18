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
                <td>1111111</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Peru</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Uruguay</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Varela</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Bolivia</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Republica Checa</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>USA</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Fran</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Canada</td>
                <td>22222222</td>
              </tr>
              <tr>
                <td>Trinidad y Tobago</td>
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
