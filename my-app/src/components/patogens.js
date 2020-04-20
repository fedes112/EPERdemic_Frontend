import React, { useState, useEffect } from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import {useGet} from '../hooks/useFetch';


export default () => {
    const [pathogens, setPathogens] = useGet('/patogeno');// eslint-disable-line no-unused-vars
    const [getPatogenos, setGetPatogenos] = useState(false);
    
    useEffect(() => {
        if (!getPatogenos) return;
        console.log(pathogens);
        setGetPatogenos(false);
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getPatogenos]);

    const handleGetPathogens = () => {
        setGetPatogenos(true);
    };

    const pathongens_button = () =>(
       <Container fluid>
            <Card className="text-center">
                <Card.Body>
                    <Button variant="primary" size="lg" type="submit" onClick={handleGetPathogens}>
                        Patógenos Actuales
                    </Button>{' '}
                </Card.Body>
            </Card>
        </Container> 
    );

    return [pathogens, pathongens_button]
};


  