import React from 'react';
import {Link} from 'react-router-dom';

const Diagnoses = props => {
    return (
        <div>
            <ul>
                {props.diagnoses.map(diagnosis =>
                    <li key={diagnosis.id}>
                        <Link to={`/diagnoses/${diagnosis.id}`} >{diagnosis.name}</Link>
                    </li>
                    )}
            </ul>
        </div>
    );
}
export default Diagnoses