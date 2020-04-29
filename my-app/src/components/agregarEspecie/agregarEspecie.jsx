import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";
import "./agregarEspecie.css";

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

const AgregarEspecieForm = () => {
  return (
    <Card className="m-2 shadow">
      <AgregarEspecieHeader />
      <AgregarEspecieBody />
    </Card>
  );
};

const AgregarEspecieHeader = () => {
  return (
    <Card.Header>
      <div style={{ display: "inline-block" }}>Agregar especie para:</div>
      <h5 className="nombre-patogeno-text">Los Millones De Ronny</h5>
    </Card.Header>
  );
};

const AgregarEspecieBody = () => {
  return (
    <Card.Body>
      <FormNombreDeLaEspecie />
      <FormUbicacionDeOrigen />
    </Card.Body>
  );
};

const FormNombreDeLaEspecie = () => {
  return (
    <Row>
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
  );
};

const FormUbicacionDeOrigen = () => {
  return (
    <Row>
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
  );
};

export default AgregarEspecie;
