import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AgregarPatogenoModal from "../../../components/agregarPatogeno/agregarPatogenoModal";
import AgregarEspecieModal from "../../../components/agregarEspecie/agregarEspecieModal";
import ListaDeEspecies from "../../../components/listaDeEspecies/listaDeEspecies";
import InformacionDeEspecie from "../../../components/informacionDeEspecie/informacionDeEspecie";
import BotonDeEmpezarSimulacion from "../../../components/botonDeEmpezarSimulacion/botonDeEmpezarSimulacion";
import Leaderboard from "../../../components/leaderBoard/leaderboard";
import "./home.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="6">
          <BotonDeEmpezarSimulacion />
        </Col>
        <Col md="3">
          <AgregarPatogenoModal />
        </Col>
        <Col md="3">
          <AgregarEspecieModal />
        </Col>
      </Row>

      <Row style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Leaderboard />
      </Row>

      <Row>
        <Col>
          <ListaDeEspecies />
        </Col>
        <Col>
          <InformacionDeEspecie />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
