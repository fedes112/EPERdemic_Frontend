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

const AgregarPatogenoForm = ({ register }) => {
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
              ref={register}
              name="tipo"
              style={{ width: "-webkit-fill-available" }}
              type="text"
              placeholder="Tipo de Patogeno"
            />
          </Col>
        </div>
      </Row>
      <SlidesAtributo registro={register} />
    </>
  );
};

const SlidesAtributo = ({ register }) => {
  return (
    <>
      <SlideDeAtributo
        key={"Contagio Personas"}
        register={register}
        labelText="Contagio Personas"
        minusIcon={faHeadSideCoughSlash}
        plusIcon={faHeadSideCough}
      />
      <SlideDeAtributo
        key={"Contagio Animales"}
        register={register}
        labelText="Contagio Animales"
        minusIcon={faHorseHead}
        plusIcon={faHorseHead}
      />
      <SlideDeAtributo
        key={"Contagio Insectos"}
        register={register}
        labelText="Contagio Insectos"
        minusIcon={faSpider}
        plusIcon={faSpider}
      />
      <SlideDeAtributo
        key={"Defensa"}
        register={register}
        labelText="Defensa"
        minusIcon={faShieldAlt}
        plusIcon={faShieldVirus}
      />
      <SlideDeAtributo
        key={"Letalidad"}
        register={register}
        labelText="Letalidad"
        minusIcon={faVirusSlash}
        plusIcon={faVirus}
      />
    </>
  );
};

export default AgregarPatogenoForm;
