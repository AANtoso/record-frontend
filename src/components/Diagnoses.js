import React from 'react';
import {Link} from 'react-router-dom';

const Diagnoses = props => {
    // debugger
    const renderDiagnosis = props.diagnoses.map(diagnosis => {
        // debugger
           return (
            <li key={diagnosis.id}>
                <Link to={`/diagnoses/${diagnosis.id}`} >{diagnosis.name}</Link> 
            </li>
    )})
    return (
        <div>
            <ul>
                {renderDiagnosis}
            </ul>
        </div>
    );
}
export default Diagnoses