import React from 'react';
// import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Medication = props => {
    // const handleDelete = (medication) => {
    //     console.log('DELETE MEDICATION', medication);
    //     props.deleteMedication(medication.id)
    // };

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