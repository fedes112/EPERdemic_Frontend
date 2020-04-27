import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AgregarPatogeno from "../../../components/agregarPatogeno/agregarPatogeno";
import AgregarEspecie from "../../../components/agregarEspecie/agregarEspecie";
import ListaDePatogenos from "../../../components/listaDePatogenos/listaDePatogenos";
import InformacionDeEspecie from "../../../components/informacionDeEspecie/informacionDeEspecie";
import BotonDeEmpezarSimulacion from "../../../components/botonDeEmpezarSimulacion/botonDeEmpezarSimulacion";
import "./home.css";

const Home = () => {
  return (
    <Container fluid>
      <Row className="main-row">
        <Col className="first-column" md="4">
          <Row className="boton-simulacion-row">
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
        </Col>
        <Col md="8" className="second-column">
          <Row className="second-column-row">
            <AgregarPatogeno />
          </Row>
          <Row className="second-column-row">
            <AgregarEspecie />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
