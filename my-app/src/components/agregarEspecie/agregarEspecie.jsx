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
import { isEmpty } from "lodash";
import { updateToCreatePathogen } from "../../redux/actions/backendPathogensActions";

/* eslint-disable react-hooks/exhaustive-deps */
const AgregarEspecie = ({
  ubicaciones,
  pathogens,
  pathogen_to_create,
  selectToCreatePathogen,
}) => {
  const [especie, setEspecie] = useState({});
  const [patogenoSeleccionado, setPatogenoSeleccionado] = useState({});
  const { register, handleSubmit, reset, setValue } = useForm();

  console.log("PATOGENO PARA CREAR");
  console.log(pathogen_to_create);

  const handleSendEspecie = (data) => {
    setEspecie({
      ...especie,
      patogeno: data.patogeno,
      nombre: data.nombre,
      paisDeOrigen: data.paisDeOrigen,
    });
    reset();
  };

  const sendEspecie = usePost(
    CLIENT_SERVER,
    "Se creo la especie con exito",
    "Hubo un problema creando la especie D:",
    `/patogeno/${especie.patogeno}`,
    () => {},
    especie
  );

  useEffect(() => {
    if (!isEmpty(especie)) {
      console.log("SENDING DATA:", especie);
      sendEspecie();
    }
  }, [especie]);

  return (
    <Form className="px-2" onSubmit={handleSubmit(handleSendEspecie)}>
      <DropDownPatogenos register={register} setValue={setValue} />
      <AgregarEspecieForm
        ubicaciones={ubicaciones}
        patogenoSelecc={pathogen_to_create.pathogen_name}
        selectToCreatePathogen={selectToCreatePathogen}
        pathogen_to_create={pathogen_to_create}
      />
      <BotonAgregarEspecie />
    </Form>
  );
};

const AgregarEspecieForm = ({
  register,
  setValue,
  ubicaciones,
  patogenoSelecc,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  return (
    <Card className="m-2 shadow">
      <AgregarEspecieHeader patogenoSelecc={patogenoSelecc || ""} />
      <AgregarEspecieBody
        register={register}
        setValue={setValue}
        ubicaciones={ubicaciones}
        selectToCreatePathogen={selectToCreatePathogen}
        pathogen_to_create={pathogen_to_create}
      />
    </Card>
  );
};

const BotonAgregarEspecie = () => {
  return (
    <Button
      style={{
        paddingRight: "50px",
        marginTop: "15px",
        width: "-webkit-fill-available",
      }}
      variant="primary"
      type="submit"
    >
      ¡ Crear Especie !
    </Button>
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
  register,
  ubicaciones,
  setValue,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
  return (
    <Card.Body>
      <Row>
        <FormNombreDeLaEspecie
          register={register}
          selectToCreatePathogen={selectToCreatePathogen}
          pathogen_to_create={pathogen_to_create}
        />
      </Row>
      <Row>
        <FormUbicacionDeOrigen
          register={register}
          setValue={setValue}
          ubicaciones={ubicaciones}
          selectToCreatePathogen={selectToCreatePathogen}
          pathogen_to_create={pathogen_to_create}
        />
      </Row>
    </Card.Body>
  );
};

const FormNombreDeLaEspecie = ({
  register,
  selectToCreatePathogen,
  pathogen_to_create,
}) => {
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
          placeholder="Nombre de Especie"
          onBlur={(data) =>
            selectToCreatePathogen({
              nombre: data.target.value,
              ...pathogen_to_create,
            })
          }
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
  return (
    <>
      <Col style={{ alignSelf: "flex-end" }} md="2">
        <Form.Label>Lugar</Form.Label>
      </Col>
      <Col md="9">
        <DropdownButton
          className="dropdown-pathogen-button"
          id="dropdown-basic-button"
          title={pathogen_to_create.paisDeOrigen || "Ubicaciones"}
        >
          {ubicaciones.map((ubicacion, index) => (
            <Dropdown.Item
              key={(ubicacion, index)}
              onClick={() =>
                selectToCreatePathogen({
                  paisDeOrigen: ubicacion.nombreUbicacion,
                  ...pathogen_to_create,
                })
              }
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
  pathogens: state.client.pathogens,
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
