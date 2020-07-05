import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {addMedication} from '../actions/addMedication';

class MedicationInput extends Component {
    state = {
        name: '',
        dose: '',
        frequency: '',
        called_in: false
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value,
            dose: event.target.value,
            frequency: event.target.value 
        })
    }
    handleYes = () => {
        this.setState({
            called_in: !this.state.called_in
        })
    }
    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addMedication(this.state, this.props.diagnosis.id);
        this.setState({
            name: '',
            dose: '',
            frequency: ''
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={event => this.handleOnSubmit(event)}>
                    <Form.Label> Name:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='name' type='text' value={this.state.name}></Form.Control>
                    <Form.Label> Dose:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='dose' type='text' value={this.state.dose}></Form.Control>
                    <Form.Label> Frequency:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='frequency' type='text' value={this.state.frequency}></Form.Control>
                    <Form.Label> Has this medication been called in?</Form.Label>    
                    <Form.Check label='Yes' type='radio' name='called in' onChange={this.handleYes} />
                    <Form.Check label='No' type='radio' name='called in' />
                    <br/>
                    <Button type='submit' size='sm'>Submit</Button>
                </Form>
                <br/>
            </div>
        );
    }
}

export default connect(null, {addMedication})(MedicationInput);