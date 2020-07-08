import React from 'react';
import Card from 'react-bootstrap/Card';
import Medication from '../components/Medication'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {deleteMedication} from '../actions/deleteMedication'

const Medications = props => {

    const handleDelete = (event) => {
        // debugger
        const medId = event.target.parentElement.parentElement.dataset.id
        const dId = event.target.parentElement.parentElement.dataset.diagnosisId
        event.target.parentElement.parentElement.remove()
        props.deleteMedication(medId, dId)
    }

    const renderMedications = props.medications.map(medication => {
        // debugger
        return (
            <div data-id={medication.id} data-diagnosis-id={medication.diagnosis_id} key={medication.id}>             
                <Card>
                <Card.Header>
                    <Medication medication={medication.name} id={medication.id} diagnosisID={medication.diagnosis_id} />
                </Card.Header>
                <Button size='sm' variant='outline-danger' onClick={handleDelete}>Delete</Button>
            </Card>
            </div>

                )
    })
    return (
        <div>
            {renderMedications}
        </div>
    );
}

const mapStateToProps = state => ({
    medications: state.medications
})

export default connect(mapStateToProps, {deleteMedication})(Medications);