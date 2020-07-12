import React from 'react';
import MedicationsContainer from '../containers/MedicationsContainer';

const Diagnosis = props => {
    // const diagnosis = props.diagnoses.filter(diagnosis => diagnosis.id === props.match.params.id)[0]
    // const diagnosis = props.diagnoses[parseInt(props.match.params.id) - 1]
    const diagnosis = props.diagnoses.find(diagnosis => {
        return diagnosis.id === parseInt(props.match.params.id)
    })
    console.log(diagnosis)
    return (
     <>
        <h3>{diagnosis ? diagnosis.name :null}</h3>
        <MedicationsContainer diagnosis={diagnosis} />
    </>
    )
}

export default Diagnosis