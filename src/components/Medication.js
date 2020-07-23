import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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