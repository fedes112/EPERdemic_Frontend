import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";
import "./listaDePatogenos.css";

const ListGroupDeEspecies = () => {
  return (
    <ListGroup className="list-group-flush list-group-especies">
      <ListGroup.Item>Los Millones de Ronny</ListGroup.Item>
      <ListGroup.Item>Tobias</ListGroup.Item>
      <ListGroup.Item>Gripe</ListGroup.Item>
      <ListGroup.Item>Apex Legends</ListGroup.Item>
    </ListGroup>
  );
};

const ListaDePatogenos = () => {
  return (
    <Card className="m-2 shadow">
      <Card.Header>Lista de Patogenos</Card.Header>
      <Card.Body>
        <DropDownPatogenos />
        <Card.Title>Especies</Card.Title>
        <ListGroupDeEspecies />
      </Card.Body>
    </Card>
  );
};

export default ListaDePatogenos;
