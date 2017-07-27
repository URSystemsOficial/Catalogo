import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './home/homePage';
import Login from './user/Login';



class Routes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route component={HomePage}/>
      </Switch>
    );
  }
}

export default Routes;
