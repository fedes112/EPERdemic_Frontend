
import Formulary from './components/form.js'
import patogens from './components/patogens.js'
import {Row, Col, Modal} from 'react-bootstrap';
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

 //show={isShown} onHide={hide}

function App() {

  const [pathogens,setpathogens] = useState([]);
  const [pathogens_effect, pathongens_button] = patogens();

  useEffect(() => {
    setpathogens(pathogens_effect);
    }, [pathogens_effect]);

  const renderModal = pathongens_button()
  return (
    <div  className='App'>
        <Row >
          <Col >
              <Modal>
                <Modal.Header >
                  <Modal.Title>TEST</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">TEST</Modal.Body>
              </Modal>
          </Col>
          <Col ></Col>
        <Col >
          <div style={{ height: '50vh' ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
               {renderModal}
          </div>
          <div style={{ height: '50vh', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
               <Formulary />
          </div>
        </Col>
        </Row>

  </div>
  );
}

export default App;
