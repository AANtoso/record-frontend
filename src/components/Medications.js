import React from 'react';
import Card from 'react-bootstrap/Card';
import Medication from '../components/Medication'

const Medications = props => {
    return (
        <div>
            {props.medications && props.medications.map(medication =>
                <Card key={medication.id}>
                    <Card.Header>
                        <Medication medication={medication.name} id={medication.id} diagnosisID={medication.diagnosis_id} />
                    </Card.Header>
                </Card>
            )}
        </div>
    );
}

export default Medications;