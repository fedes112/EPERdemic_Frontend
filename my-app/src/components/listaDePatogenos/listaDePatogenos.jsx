import React from "react";
import { Card, DropdownButton, Dropdown, ListGroup } from "react-bootstrap";
import "./listaDePatogenos.css";

const ListaDePatogenos = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Lista de Patogenos</Card.Title>
        <DropdownButton id="dropdown-basic-button" title="Patogenos">
          <Dropdown.Item href="#/action-1">Hongo</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Virus</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Bacteria</Dropdown.Item>
        </DropdownButton>
        <Card.Title>Especies</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Los Millones de Ronny</ListGroup.Item>
          <ListGroup.Item>Tobias</ListGroup.Item>
          <ListGroup.Item>Gripe</ListGroup.Item>
          <ListGroup.Item>Apex Legends</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ListaDePatogenos;
