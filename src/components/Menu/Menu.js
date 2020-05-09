import React, {Component} from 'react';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component{
    render(){
        return(
            <div>
                <h1>Menu</h1>
                { this.props.menu.map( (pizza)=><MenuItem key={ pizza.id } pizza={ pizza }/>) }
            </div>
        ) //end return
    } // end render
} // end class

export default Menu;