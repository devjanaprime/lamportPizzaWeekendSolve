import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducerInitialState = {};

const pizzaReducer = ( state=reducerInitialState, action ) =>{
    console.log( 'in pizzaReducer:', action );
    return state;
}

const pizzaStore = createStore( pizzaReducer );

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));
