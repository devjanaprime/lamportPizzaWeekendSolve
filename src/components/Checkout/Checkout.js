import React, {Component} from 'react';

class Checkout extends Component{
    handleClick = () =>{
        console.log( 'handleClick');
        this.props.dispatch( { type: 'placeOrder' } );
    }
    render(){
        return(
            <div>
                <h1>Checkout</h1>
                <h3>{ JSON.stringify( this.props.reduxState ) }</h3>
                <button onClick={ this.handleClick }>Checkout</button>
            </div>
        ) //end return
    } // end render
} // end class

export default Checkout;