import React from 'react';
import MedicationsContainer from '../containers/MedicationsContainer';

const Diagnosis = props => {
    const dagnosis = props.diagnoses[parseInt(props.match.params.id) - 1]
    return (
     <>
        <h3>{diagnosis ? diagnosis.name :null}</h3>
        <MedicationsContainer diagnosis={diagnosis} />
    </>
    )
}

export default Diagnosis