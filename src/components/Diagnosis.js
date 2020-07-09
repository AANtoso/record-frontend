import React from 'react';
import MedicationsContainer from '../containers/MedicationsContainer';

const Diagnosis = props => {
    // debugger
    // const diagnosis = props.diagnoses.filter(diagnosis => diagnosis.id === props.match.params.id)[0]
    // debugger
    const diagnosis = props.diagnoses[parseInt(props.match.params.id) - 1]
    return (
     <>
        <h3>{diagnosis ? diagnosis.name :null}</h3>
        <MedicationsContainer diagnosis={diagnosis} />
    </>
    )
}

export default Diagnosis