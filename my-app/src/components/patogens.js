import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useGet } from "../hooks/useFetch";
import { BACKEND_SERVER } from "../enums/enums.js";
import { isEmpty } from "lodash";

export default () => {
  const [pathogens, setPathogens] = useState();
  const [getPatogenos, setGetPatogenos] = useState(false);

  const getPathogens = useGet(BACKEND_SERVER, "/patogeno", setPathogens);

  useEffect(() => {
    if (!getPatogenos) return;
    getPathogens();
    setGetPatogenos(false);
  }, [getPatogenos]);

  const handleGetPathogens = () => {
    setGetPatogenos(true);
  };

  const pathongens_button = () => (
    <Container fluid>
      <Card className="text-center">
        <Card.Body>
          <Button
            variant="primary"
            size="lg"
            type="submit"
            onClick={handleGetPathogens}
          >
            Patógenos Actuales
          </Button>{" "}
          {!isEmpty(pathogens) &&
            pathogens.map((pathogen) => <div>{pathogen.tipo}</div>)}
        </Card.Body>
      </Card>
    </Container>
  );

  return [pathogens, pathongens_button];
};
