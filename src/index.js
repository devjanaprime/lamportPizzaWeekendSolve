import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';

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
        console.log( 'placing order:', state );
        // reformat state for the POST
        const objectToPost ={
            customer_name: state.customer.name,
            street_address: state.customer.street,
            city: state.customer.city,
            zip: state.customer.zip,
            total: 345.00, // would write some logic to loop through pizzas array and calculate total
            type: state.customer.type,
            pizzas: state.pizzas
          }
        Axios.post( '/api/order', objectToPost ).then( ( response )=>{
            console.log( 'back from POST:', response.data );
        }).catch( ( err )=>{
            console.log( err );
            alert( 'nope' );
        }) // end axios call
    }
    return state;
}

const pizzaStore = createStore( pizzaReducer );

ReactDOM.render(<Provider store={ pizzaStore }><App /></Provider>, document.getElementById('root'));
