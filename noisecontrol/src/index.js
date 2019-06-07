import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {addclassReducer} from './reducers/addclassReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const store = createStore(addclassReducer, applyMiddleware(thunk, logger))
console.log('hello',store.getState())
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));


