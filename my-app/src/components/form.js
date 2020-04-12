import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import {Form, Button} from 'react-bootstrap';
import {usePost } from '../hooks/useFetch';



function Example() {
    const [wizard,setWizard] = useState();
    const {
         register, handleSubmit
      } = useForm();
    const [submitWizard, setSubmitWizard] = useState(false);
    const sendWizard = () => console.log(wizard);
    //(usePost )('/wizard', wizard);
    //Modificar url


    useEffect(() => {
        if (!submitWizard) return;
        sendWizard();
        setSubmitWizard(false);
    }, [submitWizard]);

    const handleSendWizard = data => {
        setWizard({ ...wizard, name: data.name });
        setSubmitWizard(true);
        
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

export default Example