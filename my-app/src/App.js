import React from 'react';
import Formulary from './components/form.js'
import {Container, Row, Col} from 'react-bootstrap';
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <div  className='App'>
<Container className= 'container'>
  <Row>
    <Col xs={9}></Col>
    <Col><Formulary/></Col>
  </Row>
</Container>
</div>
  );
}

export default App;
