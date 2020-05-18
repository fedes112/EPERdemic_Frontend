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

/* eslint-disable react-hooks/exhaustive-deps */
const AgregarEspecie = ({ ubicaciones, pathogens }) => {
  const [especie, setEspecie] = useState({});
  const { register, handleSubmit, reset, setValue } = useForm();

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
        register={register}
        setValue={setValue}
        ubicaciones={ubicaciones}
        patogenoSelecc={pathogens.find(
          (patogeno) => patogeno.id === especie.patogeno
        )}
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
}) => {
  return (
    <Card className="m-2 shadow">
      <AgregarEspecieHeader patogenoSelecc={patogenoSelecc} />
      <AgregarEspecieBody
        register={register}
        setValue={setValue}
        ubicaciones={ubicaciones}
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
        {patogenoSelecc === undefined
          ? "No se selecciono un patogeno"
          : patogenoSelecc.tipo}
      </h5>
    </Card.Header>
  );
};

const AgregarEspecieBody = ({ register, ubicaciones, setValue }) => {
  return (
    <Card.Body>
      <Row>
        <FormNombreDeLaEspecie register={register} />
      </Row>
      <Row>
        <FormUbicacionDeOrigen
          register={register}
          setValue={setValue}
          ubicaciones={ubicaciones}
        />
      </Row>
    </Card.Body>
  );
};

const FormNombreDeLaEspecie = ({ register }) => {
  return (
    <>
      <Col style={{ alignSelf: "flex-end" }} md="2">
        <Form.Label>Nombre de Especie</Form.Label>
      </Col>
      <Col md="9">
        <Form.Control
          ref={register}
          style={{ width: "-webkit-fill-available" }}
          type="text"
          name="nombre"
          placeholder="Nombre de Especie"
        />
      </Col>
    </>
  );
};

const FormUbicacionDeOrigen = ({ register, ubicaciones, setValue }) => {
  return (
    <>
      <Col style={{ alignSelf: "flex-end" }} md="2">
        <Form.Label>Lugar</Form.Label>
      </Col>
      <Col md="9">
        <DropdownButton
          className="dropdown-pathogen-button"
          id="dropdown-basic-button"
          title="Ubicaciones"
        >
          {ubicaciones.map((ubicacion, index) => (
            <Dropdown.Item
              key={(ubicacion, index)}
              ref={register}
              name="paisDeOrigen"
              eventKey={ubicacion.nombreUbicacion}
              onSelect={(ubicacion) => setValue("paisDeOrigen", ubicacion)}
            >
              <option value={ubicacion}>{ubicacion.nombreUbicacion}</option>
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
});

export default connect(mapStateToProps)(AgregarEspecie);
