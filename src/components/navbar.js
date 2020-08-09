import React,{Component} from 'react';
import '../css/nav.css'
import PropTypes from 'prop-types'

class Navbar extends Component{
    static defaultProps={
        onNewRecipe(){}
    }
    static propTypes={
        onNewRecipe:PropTypes.func
    }
    render(){
        return(
            <header>
                <h2>Recipe App</h2>
                <nav className="navbar">
                   <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;