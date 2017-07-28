import React, {Component} from 'react';
import firebase from '../../firebase';
import {message, Button,Card} from 'antd';



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



  render(){
    return(
      <div>
        <Card
            style={{margin:'10% auto', width:'50%'}}
            title="Inicia Sesión">

            <Button type="primary"
            onClick={this.logIn}>Inicia Sesion con Google</Button>
        </Card>
      </div>

    );
    }

}

export default Login;
