import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Form,
  Row,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import DropDownPatogenos from "../dropDownPatogenos/dropDownPatogenos";
import "./agregarEspecie.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { usePost } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import { updateToCreatePathogen } from "../../redux/actions/backendPathogensActions";
import { debounce } from "debounce";

/* eslint-disable react-hooks/exhaustive-deps */
const AgregarEspecie = ({
  ubicaciones,
  pathogen_to_create,
  selectToCreatePathogen,
  hide,
}) => {
  const { handleSubmit } = useForm();
  const [crearEspecie, setCrearEspecie] = useState(false);

  const handleSendEspecie = (data) => {
    setCrearEspecie(true);
  };

  const sendEspecie = usePost(
    CLIENT_SERVER,
    "Se creo la especie con exito",
    "Hubo un problema creando la especie D:",
    `/patogeno/${pathogen_to_create.pathogen_id}`,
    () => {},
    {
      nombre: pathogen_to_create.nombre,
      paisDeOrigen: pathogen_to_create.paisDeOrigen,
      patogenoId: pathogen_to_create.pathogen_id,
    }
  );

  useEffect(() => {
    if (
      pathogen_to_create.nombre &&
      pathogen_to_create.paisDeOrigen &&
      crearEspecie
    ) {
      console.log("SENDING DATA:", {
        nombre: pathogen_to_create.nombre,
        paisDeOrigen: pathogen_to_create.paisDeOrigen,
        patogenoId: pathogen_to_create.pathogen_id,
      });
      sendEspecie();
      selectToCreatePathogen({});
      hide();
    }
  }, [crearEspecie]);

  return (
    <Form className="px-2" onSubmit={handleSubmit(handleSendEspecie)}>
      <DropDownPatogenos />
      <AgregarEspecieForm
        ubicaciones={ubicaciones}
        patogenoSelecc={pathogen_to_create.patogeno_tipo}
        selectToCreatePathogen={selectToCreatePathogen}
        pathogen_to_create={pathogen_to_create}
      />
      <Button
        style={{
          paddingRight: "50px",
          marginTop: "15px",
          width: "-webkit-fill-available",
        }}
        variant="primary"
        type="submit"
        disabled={
          !(
            pathogen_to_create.paisDeOrigen &&
            pathogen_to_create.nombre &&
            pathogen_to_create.pathogen_id
          )
        }
        onClick={() => setCrearEspecie(true)}
      >
        ¡ Crear Especie !
      </Button>
    </Form>
  );
};

const AgregarEspecieForm = ({
  ubicaciones,
  patogenoSelecc,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  return (
    <Card className="m-2 shadow">
      <AgregarEspecieHeader patogenoSelecc={patogenoSelecc || ""} />
      <AgregarEspecieBody
        ubicaciones={ubicaciones}
        selectToCreatePathogen={selectToCreatePathogen}
        pathogen_to_create={pathogen_to_create}
      />
    </Card>
  );
};

const AgregarEspecieHeader = ({ patogenoSelecc }) => {
  return (
    <Card.Header>
      <div style={{ display: "inline-block" }}>Agregar especie para:</div>
      <h5 className="nombre-patogeno-text">
        {patogenoSelecc === ""
          ? "No se selecciono un patogeno"
          : patogenoSelecc}
      </h5>
    </Card.Header>
  );
};

const AgregarEspecieBody = ({
  ubicaciones,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  return (
    <Card.Body>
      <Row>
        <FormNombreDeLaEspecie
          selectToCreatePathogen={selectToCreatePathogen}
          pathogen_to_create={pathogen_to_create}
        />
      </Row>
      <Row>
        <FormUbicacionDeOrigen
          ubicaciones={ubicaciones}
          selectToCreatePathogen={selectToCreatePathogen}
          pathogen_to_create={pathogen_to_create}
        />
      </Row>
    </Card.Body>
  );
};

const FormNombreDeLaEspecie = ({
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  const namePatogen = (nombre) => {
    selectToCreatePathogen({
      ...pathogen_to_create,
      nombre: nombre,
    });
  };

  const debounceName = (nombre) => debounce(namePatogen(nombre), 800);

  return (
    <>
      <Col style={{ alignSelf: "flex-end" }} md="2">
        <Form.Label>Nombre de Especie</Form.Label>
      </Col>
      <Col md="9">
        <Form.Control
          style={{ width: "-webkit-fill-available" }}
          type="text"
          name="nombre"
          placeholder={pathogen_to_create.nombre || "Nombre de Especie"}
          onChange={(data) => {
            debounceName(data.target.value);
          }}
        />
      </Col>
    </>
  );
};

const FormUbicacionDeOrigen = ({
  ubicaciones,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState();

  const handleCreate = (ubicacion) => {
    selectToCreatePathogen({
      ...pathogen_to_create,
      paisDeOrigen: ubicacion.nombreUbicacion,
    });
    setUbicacionSeleccionada(ubicacion.nombreUbicacion);
  };
  return (
    <>
      <Col style={{ alignSelf: "flex-end" }} md="2">
        <Form.Label>Lugar</Form.Label>
      </Col>
      <Col md="9">
        <DropdownButton
          className="dropdown-pathogen-button"
          id="dropdown-basic-button"
          title={
            ubicacionSeleccionada ||
            pathogen_to_create.paisDeOrigen ||
            "Ubicaciones"
          }
        >
          {ubicaciones.map((ubicacion, index) => (
            <Dropdown.Item
              key={(ubicacion, index)}
              onClick={() => handleCreate(ubicacion)}
            >
              {ubicacion.nombreUbicacion}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Col>
    </>
  );
};

const mapStateToProps = (state) => ({
  ubicaciones: state.client.ubicaciones,
  pathogen_to_create: state.backend.pathogen_to_create,
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectToCreatePathogen: (data) => {
      dispatch(updateToCreatePathogen(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgregarEspecie);
