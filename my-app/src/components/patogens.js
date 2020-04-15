import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import {Button, Card, Container} from 'react-bootstrap';
import {useGet} from '../hooks/useFetch';


export default () => {
    const [pathogens,setpathogens] = useState();
    const {
         register, handleSubmit
      } = useForm();
    const [getPatogenos, setGetPatogenos] = useState(false);

    const all_pathogens = (useGet)('/patogeno');

    useEffect(() => {
        if (!getPatogenos) return;
        all_pathogens();
        setGetPatogenos(false);
    }, [getPatogenos]);

    const handleGetPathogens = () => {
        setGetPatogenos(true);
    };

    const pathongens_button = () =>(
       <Container fluid>
            <Card className="text-center">
                <Card.Body>
                    <Button variant="primary" size="lg" onSubmit={ handleSubmit(handleGetPathogens)}>
                        Patógenos Actuales
                    </Button>{' '}
                </Card.Body>
            </Card>
        </Container> 
    );

    return [pathogens, pathongens_button]
};


  