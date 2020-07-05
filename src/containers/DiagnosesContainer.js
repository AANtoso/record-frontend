import React, { Component } from 'react';
import Diagnoses from '../components/Diagnoses';

class DiagnosesContainer extends Component {
    render() {
        return (
            <div>
                <Diagnoses diagnoses={this.props.diagnoses} />
            </div>
        );
    }
}

export default DiagnosesContainer