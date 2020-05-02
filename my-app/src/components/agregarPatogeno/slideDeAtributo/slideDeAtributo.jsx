import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideDeAtributo = ({ labelText, minusIcon, plusIcon }) => {
  return (
    <Form.Group as={Row} style={{ marginBottom: "0px" }}>
      <Col style={{ alignSelf: "flex-end" }} md="5">
        <SlideLabel labelText={labelText} />
      </Col>
      <Col style={{ display: "inline-flex" }} md="7">
        <SlideForm minusIcon={minusIcon} plusIcon={plusIcon} />
      </Col>
    </Form.Group>
  );
};

const SlideLabel = ({ labelText }) => {
  return <Form.Label className="text-muted">{labelText}</Form.Label>;
};

const SlideForm = ({ minusIcon, plusIcon }) => {
  return (
    <>
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={minusIcon} />
      <Form.Control
        type="range"
        className="custom-range px-2"
        id="customRange1"
      />
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={plusIcon} />
    </>
  );
};

export default SlideDeAtributo;
