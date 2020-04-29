import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideDeAtributo = ({ labelText, minusIcon, plusIcon }) => {
  return (
    <Form.Group
      as={Row}
      style={{ marginBottom: "0px" }}
      controlId="formPlaintextPassword"
    >
      <SlideLabel labelText={labelText} />
      <SlideForm minusIcon={minusIcon} plusIcon={plusIcon} />
    </Form.Group>
  );
};

const SlideLabel = ({ labelText }) => {
  return (
    <Col style={{ alignSelf: "flex-end" }} md="5">
      <Form.Label className="text-muted">{labelText}</Form.Label>
    </Col>
  );
};

const SlideForm = ({ minusIcon, plusIcon }) => {
  return (
    <Col md="7" style={{ display: "inline-flex" }}>
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={minusIcon} />
      <Form.Control
        type="range"
        className="custom-range px-2"
        id="customRange1"
      />
      <FontAwesomeIcon style={{ color: "#007bff" }} icon={plusIcon} />
    </Col>
  );
};

export default SlideDeAtributo;
