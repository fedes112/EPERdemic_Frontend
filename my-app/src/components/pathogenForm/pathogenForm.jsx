import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Container } from "react-bootstrap";
import useStateAndForwardToServers from "../../commons/hooks/useStateAndFowrdardToServers";
import "./pathogenForm.css";

const PathogenForm = () => {
  const [pathogen, setPathogen] = useStateAndForwardToServers("/patogeno");
  const { register, handleSubmit, reset } = useForm();

  const handleSendPathogen = (data) => {
    setPathogen({ ...pathogen, tipo: data.tipo });
    reset();
  };

  return (
    <Container fluid className="pathogen-form">
      <Card className="text-center">
        <Card.Header />
        <Card.Body>
          <Form onSubmit={handleSubmit(handleSendPathogen)}>
            <Form.Group>
              <Form.Label className="alert alert-danger" role="alert">
                Nombre Agente Patógeno
              </Form.Label>
              <Form.Control ref={register} name="tipo" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Card.Title />
        </Card.Body>
        <Card.Footer className="text-muted" />
      </Card>
    </Container>
  );
};

export default PathogenForm;
