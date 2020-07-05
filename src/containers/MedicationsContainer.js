import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Medications from '../components/Medications';
import MedicationInput from '../components/MedicationInput';

class MedicationsContainer extends Component {
    render() {
        return (
            <div>
                <MedicationInput diagnosis={this.props.diagnosis} />
                <Medications medications={this.propr.diagnosis && this.props.diagnosis.medications} />
            </div>
        );
    }
}

export default MedicationsContainer