import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
// import {deleteMedication} from '../actions/deleteMedication'
// import { connect } from 'react-redux'

const Medication = props => {
// debugger

    // const handleDelete = (event) => {
    //     const medId = event.target.parentElement.parentElement.dataset.id
    //     const dId = event.target.parentElement.parentElement.dataset.diagnosisId
    //     event.target.parentElement.parentElement.remove()
    //     props.deleteMedication(medId, dId)
    // }

    return (
        <div>
            <Accordion defaultActiveKey>
                <Accordion.Toggle as={Button} variant='info' >
                    {props.medication}
                </Accordion.Toggle>
                {/* <Button size='sm' variant='outline-danger' onClick={handleDelete}>Delete</Button> */}
            </Accordion>
        </div>
    )
}

export default Medication;