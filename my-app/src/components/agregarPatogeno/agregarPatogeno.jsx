import React, { useState, useEffect } from "react";
import { Button, Image, Form, Col, Row } from "react-bootstrap";
import Virus from "./resources/virus.png";
import AgregarPatogenoForm from "./agregarPatogenoForm/agregarPatogenoForm";
import { usePost } from "../../commons/hooks/useFetch";
import { CLIENT_SERVER } from "../../commons/enums/enums";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

/* eslint-disable react-hooks/exhaustive-deps */
const AgregarPatogeno = () => {
  const [pathogen, setPathogen] = useState({});
  const { register, handleSubmit, reset } = useForm();

  const handleSendPathogen = (data) => {
    setPathogen({
      ...pathogen,
      tipo: data.tipo,
      capacidadContagioPersona: data.capacidadContagioPersona,
      capacidadContagioInsectos: data.capacidadContagioInsectos,
      capacidadContagioAnimal: data.capacidadContagioAnimal,
      defensa: data.defensa,
      letalidad: data.letalidad,
    });
    reset();
  };

  const sendPathogen = usePost(
    CLIENT_SERVER,
    "Se creo el patogeno con exito",
    "Hubo un problema creando el patogeno D:",
    "/patogeno",
    () => {},
    pathogen
  );

  useEffect(() => {
    if (!isEmpty(pathogen)) {
      console.log("SENDING DATA:", pathogen);
      sendPathogen();
    }
  }, [pathogen]);

  return (
    <Form className="px-2" onSubmit={handleSubmit(handleSendPathogen)}>
      <Form.Group style={{ marginBottom: "0px" }} as={Row}>
        <Col md="7">
          <AgregarPatogenoForm register={register} />
        </Col>
        <Col md="5">
          <ImagenVirus />
        </Col>
        <BotonAgregarPatogeno />
      </Form.Group>
    </Form>
  );
};

const ImagenVirus = () => {
  return (
    <Image fluid style={{ height: "250px", width: "400px" }} src={Virus} />
  );
};

const BotonAgregarPatogeno = () => {
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
      ¡ Crear Patogeno !
    </Button>
  );
};

export default AgregarPatogeno;
