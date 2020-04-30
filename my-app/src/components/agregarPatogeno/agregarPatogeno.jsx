import React from "react";
import { Button, Image, Card, Form, Col, Row } from "react-bootstrap";
import Virus from "./resources/virus.png";
import AgregarPatogenoForm from "./agregarPatogenoForm/agregarPatogenoForm";

const AgregarPatogeno = () => {
  return (
    <Card className="m-2 shadow-2">
      <Card.Header>Agregar Patogeno</Card.Header>
      <Card.Body>
        <Form className="px-2">
          <Form.Group
            style={{ marginBottom: "0px" }}
            as={Row}
            controlId="formPlaintextPassword"
          >
            <Col md="7">
              <AgregarPatogenoForm />
            </Col>
            <Col md="5">
              <ImagenVirus />
            </Col>
            <BotonAgregarPatogeno />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

const ImagenVirus = () => {
  return (
    <Image fluid style={{ height: "250px", width: "400px" }} src={Virus} />
  );
};

const BotonAgregarPatogeno = () => {
  return (
    <Button
      style={{
        paddingRight: "50px",
        marginTop: "15px",
        width: "-webkit-fill-available",
      }}
      variant="primary"
    >
      ¡ Crear Patogeno !
    </Button>
  );
};

export default AgregarPatogeno;
