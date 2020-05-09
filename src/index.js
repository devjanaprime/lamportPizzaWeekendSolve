import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducerInitialState = {};

const pizzaReducer = ( state=reducerInitialState, action ) =>{
    console.log( 'in pizzaReducer:', action );
    if( action.type==='add' ){
        console.log( 'adding pizza to order:',  action.payload );
    }
    else if( action.type==='remove' ){
        console.log( 'removing pizza to order:',  action.payload );
    }
    else if( action.type==='customer411' ){
        console.log( 'adding customer info:',  action.payload );
    }
    return state;
}

const pizzaStore = createStore( pizzaReducer );

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));
