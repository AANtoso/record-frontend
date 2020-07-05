import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home';
import DiagnosesContainer from './containers/DiagnosesContainer';
import Diagnosis from './components/Diagnosis';
import {fetchDiagnoses} from './actions/fetchDiagnoses';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
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
        <Route path='/diagnoses/:id' render={(routerProps) => <Diagnosis {...routerProps} diagnoses={this.props.diagnoses} />} />
        <Route path='/diagnoses' render={(routerProps) => <DiagnosesContainer {...routerProps} diagnoses={this.props.diagnoses} />} />
        <Route path='/' component={Home} />
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

export default connect(mapStateToProps, {fetchDiagnoses})(App)
