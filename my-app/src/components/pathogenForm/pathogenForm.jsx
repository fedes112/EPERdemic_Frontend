import React, { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Container } from "react-bootstrap";
import { usePost } from "../../commons/hooks/useFetch";
import { BACKEND_SERVER, CLIENT_SERVER } from "../../commons/enums/enums";
import "./pathogenForm.css";

const useIdEnricher = () => {
  const store = useStore();
  const { groupName } = store.getState().client;
  return (data) => ({
    ...data,
    id: { groupName, id: data.id },
  });
};

const PathogenForm = () => {
  const [pathogen, setPathogen] = useState();
  const [pathogenReturned, setPathogenReturned] = useState();
  const [pathogenEnriched, setPathogenEnriched] = useState();
  const { register, handleSubmit, reset } = useForm();
  const [submitPathogen, setSubmitPathogen] = useState(false);
  const idEnricher = useIdEnricher();

  const sendPathogen = usePost(
    CLIENT_SERVER,
    "/patogeno",
    setPathogenReturned,
    pathogen
  );

  const sendPathogenBackend = usePost(
    BACKEND_SERVER,
    "/patogeno",
    () => {},
    pathogenEnriched
  );

  useEffect(() => {
    if (!submitPathogen) return;
    sendPathogen();
    setSubmitPathogen(false);
  }, [submitPathogen]);

  useEffect(() => {
    if (pathogenReturned) setPathogenEnriched(idEnricher(pathogenReturned));
  }, [pathogenReturned]);

  useEffect(() => {
    if (pathogenEnriched) sendPathogenBackend();
  }, [pathogenEnriched, sendPathogenBackend]);

  const handleSendPathogen = (data) => {
    setPathogen({ ...pathogen, tipo: data.tipo });
    setSubmitPathogen(true);
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
