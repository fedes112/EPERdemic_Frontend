import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./botonDeEmpezarSimulacion.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import {
  updateSimulationState,
  updateSimulationVelocity,
} from "../../redux/actions/simulationActions";
import { Col, Row } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const BotonDeEmpezarSimulacion = ({
  started,
  onClick,
  velocity,
  onRangeChange,
}) => {
  return (
    <>
      <Button
        className="my-2 ml-2 shadow boton-empezar"
        variant="primary"
        onClick={() => onClick(!started)}
        style={started ? { height: "60px" } : undefined}
      >
        <div style={{ paddingRight: "30px" }}>
          <FontAwesomeIcon icon={faPlay} size="2x" />
          <h3 className="empezar-text">
            {started ? "Detener simulación" : "Empezar simulación"}
          </h3>
        </div>
      </Button>
      {started ? (
        <Row style={{ paddingLeft: "10px" }}>
          <Col style={{ paddingTop: "8px" }} md="2">
            <div style={{ color: "white" }}>Velocidad:</div>
          </Col>
          <Col style={{ paddingRight: "10px" }} md="10">
            <RangeSlider
              min={1}
              max={5}
              value={Number(velocity)}
              onChange={(changeEvent) =>
                onRangeChange(changeEvent.target.value)
              }
            />
          </Col>
        </Row>
      ) : undefined}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (started) => {
      dispatch(updateSimulationState(started));
    },
    onRangeChange: (velocity) => {
      dispatch(updateSimulationVelocity(velocity));
    },
  };
};

const mapStateToProps = (state) => ({
  started: state.simulation.started,
  velocity: state.simulation.velocity,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BotonDeEmpezarSimulacion);
