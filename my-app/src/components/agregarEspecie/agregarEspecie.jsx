import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";

const AgregarEspecieForm = () => {
  return (
    <Card className="m-2 shadow">
      <Card.Header>
        <div style={{ display: "inline-block" }}>Agregar especie para:</div>
        <h5
          style={{
            paddingLeft: "10px",
            color: "#007bff",
            display: "inline-block",
          }}
        >
          Los Millones De Ronny
        </h5>
      </Card.Header>
      <Card.Body>
        <Row
          style={{
            display: "inline-flex",
            width: "-webkit-fill-available",
          }}
        >
          <Col style={{ alignSelf: "flex-end" }} md="2">
            <Form.Label>Nombre de Especie</Form.Label>
          </Col>
          <Col md="9">
            <Form.Control
              style={{ width: "-webkit-fill-available" }}
              type="text"
              placeholder="Nombre de Especie"
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "inline-flex",
            width: "-webkit-fill-available",
          }}
        >
          <Col style={{ alignSelf: "flex-end" }} md="2">
            <Form.Label>Lugar</Form.Label>
          </Col>
          <Col md="9">
            <Form.Control as="select">
              <option>Quilmes</option>
              <option>Varela</option>
              <option>La casa de Lucas</option>
            </Form.Control>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const AgregarEspecie = () => {
  return (
    <Card className="m-2 shadow">
      <Card.Header>Agregar Especie</Card.Header>
      <Card.Body>
        <DropDownPatogenos />
        <AgregarEspecieForm />
      </Card.Body>
    </Card>
  );
};

export default AgregarEspecie;
