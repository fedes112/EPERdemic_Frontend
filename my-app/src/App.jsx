import React from "react";
import { Provider } from "react-redux";
import { Row, Col } from "react-bootstrap";
import stateContainer from "./redux/store";
import PathogenForm from "./components/pathogenForm/pathogenForm";
import PathogenList from "./components/pathogensList/pathogensList";
import "./dist/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={stateContainer}>
        <Row>
          <Col />
          <Col>
            <PathogenList />
            <PathogenForm />
          </Col>
        </Row>
      </Provider>
    </div>
  );
}

export default App;
