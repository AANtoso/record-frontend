import React from 'react';
import Card from 'react-bootstrap/Card';
import Medication from '../components/Medication'
import { connect } from 'react-redux';

const Medications = props => {
    const renderMedications = props.medications.map(medication => {
        //debugger
        return (
             <Card key={medication.id}>
                <Card.Header>
                    <Medication medication={medication.name} id={medication.id} diagnosisID={medication.diagnosis_id} />
                </Card.Header>
            </Card>
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

export default connect(mapStateToProps, {})(Medications);