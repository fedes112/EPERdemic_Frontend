import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./modalContainer.css";

function VerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.headerText}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {React.cloneElement(props.body, { hide: props.onHide })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalContainer = ({ buttonText, buttonIcon, headerText, body }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="m-2 shadow modal-container-button"
        variant="info"
        onClick={() => setModalShow(true)}
      >
        <h3> {buttonText} </h3>
        {buttonIcon}
      </Button>

      <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        headerText={headerText}
        body={body}
      />
    </>
  );
};

export default ModalContainer;
