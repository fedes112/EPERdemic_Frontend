import React from "react";
import { Form, Col, Row } from "react-bootstrap";
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
import SlideDeAtributo from "../slideDeAtributo/slideDeAtributo";

const AgregarPatogenoForm = ({ registro }) => {
  return (
    <>
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
              ref={registro}
              name="tipo"
              style={{ width: "-webkit-fill-available" }}
              type="text"
              placeholder="Tipo de Patogeno"
            />
          </Col>
        </div>
      </Row>
      <SlidesAtributo />
    </>
  );
};

const SlidesAtributo = () => {
  return (
    <>
      <SlideDeAtributo
        labelText="Contagio Personas"
        minusIcon={faHeadSideCoughSlash}
        plusIcon={faHeadSideCough}
      />
      <SlideDeAtributo
        labelText="Contagio Animales"
        minusIcon={faHorseHead}
        plusIcon={faHorseHead}
      />
      <SlideDeAtributo
        labelText="Contagio Insectos"
        minusIcon={faSpider}
        plusIcon={faSpider}
      />
      <SlideDeAtributo
        labelText="Defensa"
        minusIcon={faShieldAlt}
        plusIcon={faShieldVirus}
      />
      <SlideDeAtributo
        labelText="Letalidad"
        minusIcon={faVirusSlash}
        plusIcon={faVirus}
      />
    </>
  );
};

export default AgregarPatogenoForm;
