import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AgregarPatogenoModal from "../../../components/agregarPatogeno/agregarPatogenoModal";
import AgregarEspecieModal from "../../../components/agregarEspecie/agregarEspecieModal";
import ListaDePatogenos from "../../../components/listaDePatogenos/listaDePatogenos";
import InformacionDeEspecie from "../../../components/informacionDeEspecie/informacionDeEspecie";
import BotonDeEmpezarSimulacion from "../../../components/botonDeEmpezarSimulacion/botonDeEmpezarSimulacion";
import Ubicaciones from "../ubicacion/ubicaciones";
import "./home.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="4">
          <FirstColumn />
        </Col>
        <Col md="8">
          <SecondColumn />
        </Col>
      </Row>
    </Container>
  );
};

const FirstColumn = () => {
  return (
    <>
      <Row style={{ alignContent: "center" }}>
        <BotonDeEmpezarSimulacion />
      </Row>

      <Row id="informacion-de-patogenos-row">
        <Col>
          <Row className="lista-de-patogenos-row">
            <ListaDePatogenos />
          </Row>
          <Row className="informacion-de-especie-row">
            <InformacionDeEspecie />
          </Row>
        </Col>
      </Row>
    </>
  );
};

const SecondColumn = () => {
  return (
    <>
      <Row className="mx-3">
        <Col>
          <AgregarPatogenoModal />
        </Col>
        <Col>
          <AgregarEspecieModal />
        </Col>
      </Row>
      <Row>
        <Ubicaciones />
      </Row>
    </>
  );
};

export default Home;
