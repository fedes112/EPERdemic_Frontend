import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideDeAtributo = ({ labelText, minusIcon, plusIcon, register }) => {
  return (
    <Form.Group as={Row} style={{ marginBottom: "0px" }}>
      <Col style={{ alignSelf: "flex-end" }} md="5">
        <SlideLabel labelText={labelText} />
      </Col>
      <Col style={{ display: "inline-flex" }} md="7">
        <SlideForm
          register={register}
          minusIcon={minusIcon}
          plusIcon={plusIcon}
          labelText={labelText}
        />
      </Col>
    </Form.Group>
  );
};

const SlideLabel = ({ labelText }) => {
  return <Form.Label className="text-muted">{labelText}</Form.Label>;
};

const SlideForm = ({ minusIcon, plusIcon, register, labelText }) => {
  let name;
  switch (labelText) {
    case labelText === "Contagio Personas":
      name = "capacidadContagioPersona";
      console.log(name);
      break;
    case labelText === "Contagio Animales":
      name = "contagioIncapacidadContagioInsectosectos";
      console.log(name);
      break;
    case labelText === "Contagio Insectos":
      name = "capacidadContagioAnimal";
      console.log(name);
      break;
    case labelText === "Defensa":
      name = "defensa";
      console.log(name);
      break;
    case labelText === "Letalidad":
      name = "letalidad";
      console.log(name);
      break;
    default:
      name = "Error";
  }
  return (
    <>
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={minusIcon} />
      <Form.Control
        ref={register}
        name={name}
        type="range"
        className="custom-range px-2"
        id="customRange1"
      />
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={plusIcon} />
    </>
  );
};

export default SlideDeAtributo;
