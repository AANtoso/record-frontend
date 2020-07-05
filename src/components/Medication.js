import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Button, Card, Alert} from 'react-bootstrap';

const Medication = props => {
    return (
        <div>
            <Accordion defaultActiveKey>
                <Accordion.Toggle as={Button} variant='info' >
                    {props.medication}
                </Accordion.Toggle>
            </Accordion>
        </div>
    )
}

export default Medication;