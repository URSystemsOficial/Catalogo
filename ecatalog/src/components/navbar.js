import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import firebase from '../firebase';
import { Popover, Button } from 'antd';




class NavBar extends Component{

  state={
    dis:true
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({dis:false})
      } else {
        this.setState({dis:true})
      }
    });

  }


render(){
  return(
    <Menu theme='dark'
    mode='horizontal'>

    <Menu.Item>
    <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="/catalogo">Catalogo</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="/cotizaciones">Cotizaciones</Link>
    </Menu.Item>

    <Menu.Item style={this.state.dis?{display:'block'}:{display:'none'}}>
            <Link to="/login">
              LogIn
            </Link>
    </Menu.Item>


    </Menu>
   );
  }
}
export default NavBar;
