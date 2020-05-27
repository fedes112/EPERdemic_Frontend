import React, { useState, useEffect } from "react";
import { Card, ListGroup, Form } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenosSelect";
import "./listaDeEspecies.css";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useGet } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import { updateSelectedSpecies } from "../../redux/actions/backendSpeciesActions";
import { updateSelectedPathogen } from "../../redux/actions/backendPathogensActions";

/* eslint-disable react-hooks/exhaustive-deps */
const ListGroupDeEspecies = ({
  listaEspecies,
  selected_species,
  updateEspecie,
}) => {
  return (
    <ListGroup className="list-group-flush list-group-especies">
      {listaEspecies.length === 0 ? (
        <ListGroup.Item>No tiene especies!</ListGroup.Item>
      ) : (
        <div>
          {listaEspecies.map((especie, index) => (
            <ListGroup.Item
              action
              onClick={() => updateEspecie(especie)}
              key={index}
            >
              {especie.nombre}
            </ListGroup.Item>
          ))}
        </div>
      )}
    </ListGroup>
  );
};

const ListaDeEspecies = ({
  selected_species,
  updateEspecie,
  selected_pathogen,
  updateSelectedPathogen,
}) => {
  const [especies, setEspecies] = useState([]);
  const { handleSubmit } = useForm();

  useEffect(() => {
    if (selected_pathogen.pathogen !== undefined) {
      console.log("Getting DATA:", selected_pathogen.pathogen);
      getEspecies();
      updateSelectedPathogen({
        pathogen: undefined,
      });
    }
  }, [selected_pathogen.pathogen]);

  const getEspecies = useGet(
    CLIENT_SERVER,
    "Solicitud mandada",
    "Hubo un problema con la solicitud D:",
    `/especie/${selected_pathogen.pathogen}`,
    setEspecies
  );

  return (
    <Card className="m-2 shadow">
      <Card.Header>Lista de Especies</Card.Header>
      <Form className="px-2" onSubmit={handleSubmit()}>
        <Card.Body style={{ height: "305px" }}>
          <DropDownPatogenos />

          <ListGroupDeEspecies
            listaEspecies={especies || []}
            selected_species={selected_species}
            updateEspecie={updateEspecie}
          />
        </Card.Body>
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  selected_species: state.backend.selected_species,
  selected_pathogen: state.backend.selected_pathogen,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedPathogen: (data) => {
      dispatch(updateSelectedPathogen(data));
    },
    updateEspecie: (data) => {
      dispatch(updateSelectedSpecies(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaDeEspecies);
