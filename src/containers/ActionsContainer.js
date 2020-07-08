import React, { Component } from 'react';
import {Accordion, Button, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteMedication} from '../actions/deleteMedication'

class ActionsContainer extends Component {
    handleDelete = (props) => {
            props.deleteMedication(props.medication.id, props.medication.diagnosis_id)
    }

    render() {
        return (
            <div>
                <Accordion.Collapse>
                    <Card.Body>
                        <Button size='sm' variant='outline-danger' onClick={() => this.handleDelete(this.props)}>Delete</Button>
                    </Card.Body>
                </Accordion.Collapse>
            </div>
        );
    }
}

export default connect(null, {deleteMedication})(ActionsContainer);