import React from "react";
import { connect } from "react-redux";
import { Card, Container } from "react-bootstrap";
import { isEmpty } from "lodash";
import "./pathogensList.css";

const PathogenList = ({ pathogens }) => {
  return (
    <Container fluid className="pathogens-list">
      <Card className="text-center">
        <Card.Header> Patogenos Actuales </Card.Header>
        <Card.Body>
          {!isEmpty(pathogens) &&
            pathogens.map((pathogen) => (
              <div key={pathogen.tipo}>{pathogen.tipo}</div>
            ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  pathogens: state.backend.pathogens,
});

export default connect(mapStateToProps)(PathogenList);
