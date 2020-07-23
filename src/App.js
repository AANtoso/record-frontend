import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home';
import DiagnosesContainer from './containers/DiagnosesContainer';
import Diagnosis from './components/Diagnosis';
import {fetchDiagnoses} from './actions/fetchDiagnoses';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchDiagnoses();
  }

  render() {
    return (
      <>
      <Router>
        <NavLink to='/'>Home</NavLink>
        <br/>
        <NavLink to='/diagnoses'>All Diagnoses</NavLink>
        <br/><br/>

        <Switch>
          <Route exact path='/diagnoses/:id' render={(routerProps) => <Diagnosis {...routerProps} diagnoses={this.props.diagnoses} />} />
          <Route exact path='/diagnoses' render={(routerProps) => <DiagnosesContainer {...routerProps} diagnoses={this.props.diagnoses} />} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      </>
  );
  }
}

const mapStateToProps = state => {
  return {
    diagnoses: state.diagnoses
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDiagnoses: () => dispatch(fetchDiagnoses())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
