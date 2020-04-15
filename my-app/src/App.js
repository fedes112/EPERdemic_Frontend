import React from 'react';
import Formulary from './components/form.js'
import {Container, Row, Col} from 'react-bootstrap';
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <div  className='App'>
        <Row >
        <Col ><Formulary/></Col>
        <Col ><Formulary/></Col>
        <Col style={{ height: '100vh', width: '100vw',display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><Formulary/></Col>
        </Row>

  </div>
  );
}

export default App;
