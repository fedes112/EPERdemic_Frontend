
import Formulary from './components/form.js'
import patogens from './components/patogens.js'
import {Row, Col, ListGroup} from 'react-bootstrap';
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
    <div className='App'>
        <Row >
          <Col >
            <ListGroup className="list-group-vertical-sm">
                {console.log('PATOGENOS',pathogens)
                }
            </ListGroup>
          </Col>
          <Col/>
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
