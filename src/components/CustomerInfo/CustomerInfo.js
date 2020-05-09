import React, {Component} from 'react';

class CustomerInfo extends Component{
    state={
        name: '',
        street: '',
        city: '',
        zip: '',
        delivery: false
    }

    handleChange=( event, property )=>{
        console.log( 'in handleChange:', property, event.target.value );
        if( property==='delivery'){
            this.setState({
                delivery: !this.state.delivery
            })
        }
        else{
            this.setState({
                [property]: event.target.value
            })
        }
    } // end handleChange

    handleClick = () =>{
        console.log( 'in handleClick' );
        this.props.dispatch( { type: 'customer411', payload: this.state } );
    }

    render(){
        return(
            <div>
                <h1>CustomerInfo</h1>
                <input type="text" placeholder="name" onChange={ ( event )=>this.handleChange( event, 'name') }></input>
                <input type="text" placeholder="street" onChange={ ( event )=>this.handleChange( event, 'street') }></input>
                <input type="text" placeholder="city" onChange={ ( event )=>this.handleChange( event, 'city') }></input>
                <input type="text" placeholder="zip" onChange={ ( event )=>this.handleChange( event, 'zip') }></input>
                <input type="checkbox" onChange={ ( event )=>this.handleChange( event, 'delivery') }></input>Delivery
                <button onClick={ this.handleClick }>Next</button>
            </div>
        ) //end return
    } // end render
} // end class

export default CustomerInfo;