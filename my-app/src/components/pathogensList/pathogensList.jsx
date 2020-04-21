import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { isEmpty } from "lodash";
import { useGet } from "../../hooks/useFetch";
import { BACKEND_SERVER } from "../../enums/enums";
import "./pathogensList.css";

const PathogenList = () => {
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

  return (
    <Container fluid className="pathogens-list">
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
            pathogens.map((pathogen) => (
              <div key={pathogen.tipo}>{pathogen.tipo}</div>
            ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PathogenList;
