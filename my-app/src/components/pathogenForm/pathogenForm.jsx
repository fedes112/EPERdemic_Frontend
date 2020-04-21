import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button, Card, Container } from "react-bootstrap";
import { usePost } from "../../commons/hooks/useFetch";
import { enrichPathogen } from "../../commons/utils/pathogensUtils";
import { BACKEND_SERVER, CLIENT_SERVER } from "../../commons/enums/enums";
import "./pathogenForm.css";

const PathogenForm = ({ groupName }) => {
  const [pathogen, setPathogen] = useState();
  const [pathogenReturned, setPathogenReturned] = useState();
  const [pathogenEnriched, setPathogenEnriched] = useState();

  const { register, handleSubmit, reset } = useForm();
  const [submitPathogen, setSubmitPathogen] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitPathogen]);

  useEffect(() => {
    if (pathogenReturned)
      setPathogenEnriched(enrichPathogen(pathogenReturned, groupName));
  }, [pathogenReturned]);

  useEffect(() => {
    if (pathogenEnriched) sendPathogenBackend();
  }, [pathogenEnriched]);

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

const mapStateToProps = (state) => ({
  groupName: state.client.groupName,
});

export default connect(mapStateToProps)(PathogenForm);
