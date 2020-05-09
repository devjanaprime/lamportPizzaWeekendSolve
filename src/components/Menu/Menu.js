import React, {Component} from 'react';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component{
    componentDidMount(){
        console.log( this.props );
    }

    handleClick = () =>{
        this.props.history.push( '/customer' );
    } //end handleClick

    render(){
        return(
            <div>
                <h1>Menu</h1>
                { this.props.menu.map( (pizza)=><MenuItem key={ pizza.id } pizza={ pizza } dispatch={ this.props.dispatch }/>) }
                <button onClick={ this.handleClick }>Next</button>
            </div>
        ) //end return
    } // end render
} // end class

export default Menu;