import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";
import "./agregarEspecie.css";
import { useForm } from "react-hook-form";

const AgregarEspecie = () => {
  const [especie, setEspecie] = useState({});
  const { register, handleSubmit, reset, setValue } = useForm();

  const handleSendEspecie = (data) => {
    console.log(data);
    setEspecie({
      ...especie,
      patogeno: data.patogeno,
      nombre: data.nombre,
      paisDeOrigen: data.paisDeOrigen,
    });
    reset();
  };

  return (
    <Card className="m-2 shadow">
      <Card.Header>Agregar Especie</Card.Header>
      <Card.Body>
        <Form className="px-2" onSubmit={handleSubmit(handleSendEspecie)}>
          <DropDownPatogenos register={register} setValue={setValue} />
          <AgregarEspecieForm register={register} />
          <BotonAgregarEspecie />
        </Form>
      </Card.Body>
    </Card>
  );
};

const AgregarEspecieForm = ({ register }) => {
  return (
    <Card className="m-2 shadow">
      <AgregarEspecieHeader />
      <AgregarEspecieBody />
    </Card>
  );
};

const BotonAgregarEspecie = () => {
  return (
    <Button
      style={{
        paddingRight: "50px",
        marginTop: "15px",
        width: "-webkit-fill-available",
      }}
      variant="primary"
      type="submit"
    >
      ¡ Crear Especie !
    </Button>
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
      <Row>
        <FormNombreDeLaEspecie />
      </Row>
      <Row>
        <FormUbicacionDeOrigen />
      </Row>
    </Card.Body>
  );
};

const FormNombreDeLaEspecie = () => {
  return (
    <>
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
    </>
  );
};

const FormUbicacionDeOrigen = () => {
  return (
    <>
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
    </>
  );
};

export default AgregarEspecie;
