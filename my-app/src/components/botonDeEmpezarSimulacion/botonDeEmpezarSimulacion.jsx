import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./botonDeEmpezarSimulacion.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import { updateSimulationState } from "../../redux/actions/simulationActions";

const BotonDeEmpezarSimulacion = ({ started, onClick }) => {
  return (
    <Button
      className="m-2 shadow boton-empezar"
      variant="primary"
      onClick={() => onClick(!started)}
    >
      <div style={{ paddingRight: "30px" }}>
        <FontAwesomeIcon icon={faPlay} size="2x" />
        <h3 className="empezar-text">
          {started ? "Detener simulación" : "Empezar simulación"}
        </h3>
      </div>
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (started) => {
      dispatch(updateSimulationState(started));
    },
  };
};

const mapStateToProps = (state) => ({
  started: state.simulation.started,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BotonDeEmpezarSimulacion);
