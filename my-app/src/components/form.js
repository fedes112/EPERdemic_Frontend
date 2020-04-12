import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import {Form, Button} from 'react-bootstrap';
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
            <Form onSubmit={ 
                handleSubmit(handleSendWizard)
                }>
                <Form.Group>
                    <Form.Label className="alert alert-danger" role="alert">NAME</Form.Label>
                    <Form.Control ref= {register} name ='name' type="wizard" placeholder="Enter wizard name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
    );
    
};

export default Formulary