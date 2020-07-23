import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import diagnosisReducer from './reducers/diagnosisReducer'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(diagnosisReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Container>
        <App />
      </Container>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
