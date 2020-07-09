import React from 'react';
import Card from 'react-bootstrap/Card';
import Medication from '../components/Medication'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {deleteMedication} from '../actions/deleteMedication'

const Medications = props => {
    const handleDelete = (event) => {
        const medId = event.target.parentElement.parentElement.dataset.id
        const dId = event.target.parentElement.parentElement.dataset.diagnosisId
        props.deleteMedication(medId, dId)
        event.target.parentElement.parentElement.remove()
    }
    const thisDiagMeds = props.medications.filter(medication => medication.diagnosis_id === props.diagnosis.id)

    const renderMedications = thisDiagMeds.map(medication => {
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
    diagnoses: state.diagnoses,
    medications: state.medications
})

export default connect(mapStateToProps, {deleteMedication})(Medications);

//Only show the medications for the diagnosis that is currently displayed.