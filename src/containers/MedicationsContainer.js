import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import Medications from '../components/Medications';
import MedicationInput from '../components/MedicationInput';
import { connect } from 'react-redux';

class MedicationsContainer extends Component {
    render() {
        return (
            <div>
                <MedicationInput diagnosis={this.props.diagnosis} />
                <Medications diagnoses={this.props.diagnoses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    diagnoses: state.diagnoses
   
})

export default connect(mapStateToProps, {})(MedicationsContainer)

// export default MedicationsContainer