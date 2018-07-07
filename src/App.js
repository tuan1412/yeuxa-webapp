import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'react-fontawesome';

import Container from "./component/LoginPage/Container";

class App extends Component {
  state = {

  }
  onSignIn = (email, password) => {
    console.log(email);
    console.log(password);
    // axios.post("/someapi", {
    //   username: email,
    //   password: password
    // })
    // .then(response =>
    //   this.setState({
    //     username: response.data.username,
    //     id: response.data.id
    //   })
    // )
    // .catch(err => console.error(err));
  }
onSignUp = (name, email, password) => {
  console.log(name);
  console.log(email);
  console.log(password);
  // axios.post("/someapi", {
  //   name: name,
  //   username: email,
  //   password: password
  // })
  // .then(response =>
  //   this.setState({
  //     username: response.data.username,
  //     id: response.data.id
  //   })
  // )
  // .catch(err => console.error(err));
}

  render() {
    return (
      <div className="App">
        <div className="body" >
            <Container  onSignIn={this.onSignIn} 
                        onSignUp={this.onSignUp} />
        </div>
      </div>
    );
  }
}

export default App;
