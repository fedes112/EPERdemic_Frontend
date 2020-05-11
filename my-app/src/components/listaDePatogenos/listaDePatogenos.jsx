import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";
import "./listaDePatogenos.css";
import { connect } from "react-redux";

const ListGroupDeEspecies = ({ pathogens }) => {
  const [patogenoSeleccionado, setPatogenoSeleccionado] = useState(-1);

  return (
    <ListGroup className="list-group-flush list-group-especies">
      {patogenoSeleccionado !== -1 ? (
        <div>
          {pathogens
            .find(patogenoSeleccionado)
            .especies.map((especie, index) => (
              <ListGroup.Item>{especie}}</ListGroup.Item>
            ))}
        </div>
      ) : (
        <ListGroup.Item>Apex Legends</ListGroup.Item>
      )}
    </ListGroup>
  );
};

const ListaDePatogenos = () => {
  const [patogenoSeleccionado, setPatogenoSeleccionado] = useState(-1);

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

const mapStateToProps = (state) => ({
  pathogens: state.client.pathogens,
});

export default connect(mapStateToProps)(ListaDePatogenos);
