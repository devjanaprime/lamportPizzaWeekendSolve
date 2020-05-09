import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menu from '../Menu/Menu';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Checkout from '../Checkout/Checkout';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  state={
    menu: []
  }

  componentDidMount(){
    console.log( this.props );
    this.getMenu();
  }

  getMenu = () =>{
    axios.get( '/api/pizza' ).then( ( response )=>{
      console.log( 'back from GET:', response.data );
      this.setState({
        menu: response.data
      })
    }).catch( (err )=>{
      alert( 'error getting pies' );
      console.log( err );
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
          <p>{ JSON.stringify( this.props.reduxState ) }</p>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <HashRouter>
          <Route exact path='/'render={ (props)=><Menu {...props} menu={ this.state.menu } dispatch={ this.props.dispatch }/> }/>
          <Route path='/customer' render={ (props)=><CustomerInfo {...props} dispatch={ this.props.dispatch } /> }/>
          <Route path='/checkout' render={ (props)=><Checkout {...props} dispatch={ this.props.dispatch } reduxState={ this.props.reduxState }/> } />
        </HashRouter>
      </div>
    );
  }
}

const stateOnProps = ( reduxState ) => ( { reduxState } );

export default connect(stateOnProps)(App);
