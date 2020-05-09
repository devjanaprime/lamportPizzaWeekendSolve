import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducerInitialState = {
    customer: {
        name:'',
        street:'',
        city:'',
        zip:'',
        type:''
    },
    pizzas: []
};

const pizzaReducer = ( state=reducerInitialState, action ) =>{
    console.log( 'in pizzaReducer:', action );
    if( action.type==='add' ){
        console.log( 'adding pizza to order:', action.payload );
        state = { ...state, 
            pizzas: [...state.pizzas, { id: action.payload.id, quantity: 1 } ]
        }
    }
    else if( action.type==='remove' ){
        console.log( 'removing pizza to order:',  action.payload );
    }
    else if( action.type==='customer411' ){
        console.log( 'adding customer info:',  action.payload );
        let deliveryType = 'Delivery'; 
        if( !action.payload.delivery ){
            deliveryType = 'Pickup'; 
        }
        const customerObj = {
            name: action.payload.name,
            street: action.payload.street,
            city: action.payload.city,
            zip: action.payload.zip,
            type: deliveryType
        }
        state = { ...state,
            customer: customerObj
        }
    }
    else if( action.type === 'placeOrder' ){
        console.log( 'placing order' );
    }
    return state;
}

const pizzaStore = createStore( pizzaReducer );

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));
