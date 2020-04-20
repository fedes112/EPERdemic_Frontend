import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import {Form, Button, Card, Container} from 'react-bootstrap';
import {usePost} from '../hooks/useFetch';



function Formulary() {
    const [pathogen,setPathogen] = useState();
    const {
         register, handleSubmit, reset
      } = useForm();
    const [submitPathogen, setSubmitPathogen] = useState(false);
    const sendPathogen = (usePost)('/patogeno', pathogen);


    useEffect(() => {
        if (!submitPathogen) return;
        sendPathogen();
        console.log(pathogen);
        setSubmitPathogen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitPathogen]);

    const handleSendPathogen = data => {
        setPathogen({ ...pathogen, tipo: data.tipo });
        setSubmitPathogen(true);
        reset()
        console.log(data);
    };

  
    return ( 
       <Container fluid>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                <Form onSubmit={ 
                                handleSubmit(handleSendPathogen)
                                }>
                                <Form.Group>
                                    <Form.Label className="alert alert-danger" role="alert">Nombre Agente Patógeno</Form.Label>
                                    <Form.Control ref= {register}  name ='tipo' placeholder="" />
                                </Form.Group>
                                <Button variant="primary" type="submit" >
                                Submit
                                </Button>  
                            </Form>
                    <Card.Title></Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container> 
    );
    
};

export default Formulary