import React, { useState, useEffect } from "react";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenosSelect";
import "./listaDePatogenos.css";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { useGet } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";

const ListGroupDeEspecies = ({ listaEspecies }) => {
  const [especieSeleccionada, setEspecieSeleccionada] = useState("");
  console.log(especieSeleccionada);

  return (
    <ListGroup className="list-group-flush list-group-especies">
      {listaEspecies.length === 0 ? (
        <ListGroup.Item>No tiene especies!</ListGroup.Item>
      ) : (
        <div>
          {listaEspecies.map((especie, index) => (
            <ListGroup.Item
              action
              onClick={() => setEspecieSeleccionada(especie.nombre)}
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

const ListaDePatogenos = () => {
  const [patogenoSeleccionado, setPatogenoSeleccionado] = useState(-1);
  const [especies, setEspecies] = useState([]);
  const { register, handleSubmit, reset, setValue } = useForm();
  console.log(`/especie/${patogenoSeleccionado.patogenoSeleccionado}`);
  console.log(patogenoSeleccionado);
  console.log(especies);

  const handleSelectEspecie = (data) => {
    setPatogenoSeleccionado({
      ...patogenoSeleccionado,
      patogenoSeleccionado: data.patogenoSeleccionado,
    });
    reset();
  };

  useEffect(() => {
    if (patogenoSeleccionado !== undefined && patogenoSeleccionado !== -1) {
      console.log("Getting DATA:", patogenoSeleccionado);
      getEspecies();
    }
  }, [patogenoSeleccionado]);

  const getEspecies = useGet(
    CLIENT_SERVER,
    "Solicitud mandada",
    "Hubo un problema con la solicitud D:",
    `/especie/${patogenoSeleccionado.patogenoSeleccionado}`,
    setEspecies
  );

  return (
    <Card className="m-2 shadow">
      <Card.Header>Lista de Patogenos</Card.Header>
      <Form className="px-2" onSubmit={handleSubmit(handleSelectEspecie)}>
        <Card.Body>
          <DropDownPatogenos register={register} setValue={setValue} />
          <Card.Title>Especies</Card.Title>
          <ListGroupDeEspecies listaEspecies={especies || []} />
          <Button
            style={{
              paddingRight: "50px",
              marginTop: "15px",
              width: "-webkit-fill-available",
            }}
            variant="primary"
            type="submit"
          >
            ¡ Buscar Especie !
          </Button>
        </Card.Body>
      </Form>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  pathogens: state.client.pathogens,
});

export default connect(mapStateToProps)(ListaDePatogenos);
