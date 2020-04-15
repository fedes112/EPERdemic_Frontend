import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import {Form, Button, Card, Container} from 'react-bootstrap';
import {usePost} from '../hooks/useFetch';



function Formulary() {
    const [wizard,setWizard] = useState();
    const {
         register, handleSubmit
      } = useForm();
    const [submitWizard, setSubmitWizard] = useState(false);
    const sendWizard = (usePost)('/personaje', wizard);


    useEffect(() => {
        if (!submitWizard) return;
        sendWizard();
        console.log(wizard);
        setSubmitWizard(false);
    }, [submitWizard]);

    const handleSendWizard = data => {
        setWizard({ ...wizard, nombre: data.name });
        setSubmitWizard(true);
        console.log(data);
    };

  
    return ( 
       <Container fluid>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                <Form onSubmit={ 
                                handleSubmit(handleSendWizard)
                                }>
                                <Form.Group>
                                    <Form.Label className="alert alert-danger" role="alert">Nombre Agente Patógeno</Form.Label>
                                    <Form.Control ref= {register} name ='name' placeholder="" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
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