import React from 'react';
// import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Medication = props => {
    return (
        <div>
            <Accordion defaultActiveKey='0'>
                <Accordion.Toggle as={Button} variant='info' >
                    {props.medication}
                </Accordion.Toggle>
            </Accordion>
        </div>
    )
}

export default Medication;