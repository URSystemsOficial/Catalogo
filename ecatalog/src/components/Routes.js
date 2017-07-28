import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './home/homePage';
import Login from './user/Login';
import ProductList from './productlist/productList';
import ProductDetail from './productlist/productDetail';
import ProductsManagerPage from './manager/ProductsManagerPage';


class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/catalogo" component={ProductList}/>
        <Route path="/admin" component={ProductsManagerPage} />
        <Route component={HomePage}/>
        <Route path="/catalogo/:productId" component={ProductDetail}/>
      </Switch>
    );
  }
}

export default Routes;
