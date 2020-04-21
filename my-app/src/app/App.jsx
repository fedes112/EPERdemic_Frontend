import React from "react";
import { Row, Col } from "react-bootstrap";
import PathogenForm from "../components/pathogenForm/pathogenForm";
import PathogenList from "../components/pathogensList/pathogensList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Row>
        <Col />
        <Col>
          <PathogenList />
          <PathogenForm />
        </Col>
      </Row>
    </div>
  );
}

export default App;
