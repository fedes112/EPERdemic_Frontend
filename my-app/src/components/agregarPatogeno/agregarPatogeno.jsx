import React from "react";
import { Button, Image, Card, Form, Col, Row } from "react-bootstrap";
import {
  faHeadSideCough,
  faHeadSideCoughSlash,
  faVirus,
  faVirusSlash,
  faShieldAlt,
  faShieldVirus,
  faHorseHead,
  faSpider,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Virus from "./resources/virus.png";

const Slide = ({ labelText, minusIcon, plusIcon }) => {
  return (
    <Form.Group
      as={Row}
      style={{
        marginBottom: "0px",
      }}
      controlId="formPlaintextPassword"
    >
      <Col style={{ alignSelf: "flex-end" }} md="5">
        <Form.Label className="text-muted">{labelText}</Form.Label>
      </Col>
      <Col md="7">
        <div
          style={{
            display: "inline-flex",
            width: "-webkit-fill-available",
          }}
        >
          <FontAwesomeIcon style={{ color: "#007bff" }} icon={minusIcon} />
          <Form.Control
            style={{
              paddingRight: "15px",
              paddingLeft: "15px",
              paddingBottom: "0px",
              width: "-webkit-fill-available",
            }}
            type="range"
            className="custom-range"
            id="customRange1"
          />
          <FontAwesomeIcon style={{ color: "#007bff" }} icon={plusIcon} />
        </div>
      </Col>
    </Form.Group>
  );
};

const AgregarPatogeno = () => {
  return (
    <Card className="m-2 shadow-2">
      <Card.Header>Agregar Patogeno</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group
            style={{
              marginBottom: "0px",
            }}
            as={Row}
            controlId="formPlaintextPassword"
          >
            <Col md="7">
              <Row>
                <div
                  style={{
                    display: "inline-flex",
                    width: "-webkit-fill-available",
                    paddingBottom: "13px",
                  }}
                >
                  <Col style={{ alignSelf: "flex-end" }} md="5">
                    <Form.Label>Tipo</Form.Label>
                  </Col>
                  <Col md="7">
                    <Form.Control
                      style={{ width: "-webkit-fill-available" }}
                      type="text"
                      placeholder="Tipo de Patogeno"
                    />
                  </Col>
                </div>
              </Row>
              <Slide
                labelText="Contagio Personas"
                minusIcon={faHeadSideCoughSlash}
                plusIcon={faHeadSideCough}
              />
              <Slide
                labelText="Contagio Animales"
                minusIcon={faHorseHead}
                plusIcon={faHorseHead}
              />
              <Slide
                labelText="Contagio Insectos"
                minusIcon={faSpider}
                plusIcon={faSpider}
              />
              <Slide
                labelText="Defensa"
                minusIcon={faShieldAlt}
                plusIcon={faShieldVirus}
              />
              <Slide
                labelText="Letalidad"
                minusIcon={faVirusSlash}
                plusIcon={faVirus}
              />
            </Col>
            <Col md="5">
              <Image
                fluid
                style={{ height: "250px", width: "400px" }}
                src={Virus}
              />
            </Col>
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
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AgregarPatogeno;
