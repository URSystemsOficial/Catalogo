import React, {Component} from 'react';
import firebase from '../../firebase';
import {message} from 'antd';



class Login extends Component{
  componentWillMount(){

  }



logIn=()=>{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.database().ref('users').push({
        name:result.user.displayName,
        email:result.user.email,
        photoUrl:result.user.photoURL
      })
      message.success('Bienvenido '+result.user.displayName)

  })
}
}

export default Login;
