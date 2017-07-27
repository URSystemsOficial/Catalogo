import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import firebase from '../firebase';

class NavBar extends Component{








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

    <Menu.Item>
    <Link to="/login">Login</Link>
    </Menu.Item>



    </Menu>
   );
  }
}
export default NavBar;
