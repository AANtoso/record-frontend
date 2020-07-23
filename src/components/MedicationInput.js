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
        called_in: null
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleYes = () => {
        this.setState({
            called_in: !this.state.called_in
        })
    }
    handleOnSubmit = event => {
        event.preventDefault()
        const {name, dose, frequency, called_in} = this.state
        if (name === '' || dose === '' || frequency === '' || called_in === null) {
            alert('Invalid input or no input detected.')
        
        }
        else {
            this.props.addMedication(this.state, this.props.diagnosis.id);
            this.setState({
                name: '',
                dose: '',
                frequency: '',
                called_in: null
            })
        }
       
    }

    render() {
        return (
            <div>
                <Form onSubmit={event => this.handleOnSubmit(event)}>
                    <Form.Label> Name:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='name' type='text' value={this.state.name} required></Form.Control>
                    <Form.Label> Dose:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='dose' type='text' value={this.state.dose} required></Form.Control>
                    <Form.Label> Frequency:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='frequency' type='text' value={this.state.frequency} required></Form.Control>
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