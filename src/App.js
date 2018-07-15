import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from './axios';


import Container from "./components/LoginPage/Container";
import Home from "./containers/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    axios.get("https://yeuxa-api.herokuapp.com/api/auth/")
      .then(response => {
        if (response.data) {
          // console.log(response.data)
          this.setState({ userInfo: response.data });
          console.log(response.data);
          console.log('logged in')
          return axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {
          })
        }
      })
      .then(lists => this.onLoginDone(lists))
      .catch(err => console.log(err));
  }

  onLoginDone = (lists) => {
    let newFriendRequests = [];
    let newFriendRequestSended = [];
    for (let i = 0; i <= lists.data.length; i++) {
      if (i === lists.data.length) {
        if(i === 0) {
          this.setState({
            friendRequestSended: undefined,
            friendRequests: undefined
          })
        } else {
          this.setState({
            friendRequestSended: newFriendRequests,
            friendRequests: newFriendRequests
          })
        }

      } else {
        if(lists.data[i].sender === this.state.userInfo.username) {
          newFriendRequestSended.push(lists.data[i])
          if (newFriendRequestSended.length === 0) newFriendRequestSended = undefined
        } else {
          newFriendRequests.push(lists.data[i]);
          if (newFriendRequests.length === 0) newFriendRequests = undefined
        }
      }
    }


    // if (newFriendRequestSended.length > 0) {this.setState({ friendRequestSended: newFriendRequests })}
    // if (newFriendRequests.length > 0) this.setState({ friendRequests: newFriendRequests });
  }
  getData = () => {
    axios.get("https://yeuxa-api.herokuapp.com/api/auth/")
      .then(response => {
        if (response.data) {
          console.log('logged in')
          this.setState({ userInfo: response.data });
          return axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {
          })
        }
      })
      .then(lists => {
        this.onLoginDone(lists);
      })
      .catch(err => console.log(err));
  }


  onSignIn = (username, password) => {
    this.setState({ fetchInProgress: true }, function () {
      axios.post("https://yeuxa-api.herokuapp.com/api/auth/", {
        username: username,
        password: password,
      })
        .then(response => {
          this.setState({
            fetchInProgress: false,
            userInfo: response.data
          });
          return axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {})
        })
        .then(lists => this.onLoginDone(lists))
        .catch(error => {
          this.setState({
            fetchInProgress: false,
            warning: "Incorrect Username or Password !"
          });

        });

    });
  }

  clearWarning = () => {
    this.setState({ warning: undefined });
  }
  setWarning = (warning) => {
    this.setState({ warning: warning })
  }
  onSignUp = (avatar, name, username, password, onSignIn) => {
    this.setState({ fetchInProgress: true }, function () {
      var formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("fullname", name);
      formData.append("username", username);
      formData.append("password", password);
      axios.post("https://yeuxa-api.herokuapp.com/api/users/", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => this.onSignIn(username, password))
        .catch(err => {
          this.setState({
            fetchInProgress: false,
            warning: 'Username already exists !'
          });
        });
    });
  }

  onLogOut = () => {
    axios.delete('https://yeuxa-api.herokuapp.com/api/auth');
    this.setState({ userInfo: undefined });
  }
  onAceptInvite = (id, sender, receiver) => {
    axios.put('https://yeuxa-api.herokuapp.com/api/friend/accept-invitation', { id })
      .then(response => {
        console.log('aceptInvite')
        console.log(response.data._id)
        console.log(this.state)
        let newUserInfo = this.state.userInfo;
        newUserInfo['room'] = response.data._id;
        this.setState({
          friendRequests: null,
          userInfo: newUserInfo
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  onDeclineInvite = (id) => {
    axios.put('https://yeuxa-api.herokuapp.com/api/friend/reject-invitation', { id })
      .then(response => {
        if (this.state.friendRequests.length > 1) {
          var newFriendRequests = [...this.state.friendRequests];
          newFriendRequests.splice(0, 1);
          this.setState({ friendRequests: newFriendRequests })
        } else {
          this.setState({ friendRequests: null });
        }
      })
      .catch(err => console.log(err));
  }

  onsendRequest = (username) => {
    this.setState({ fetchInProgress: true }, function () {
      axios.post('https://yeuxa-api.herokuapp.com/api/friend/add-friend', {
        username: username
      })
        .then(response => {
          this.setState({
            fetchInProgress: false,
            friendRequestSended: username
          })
          console.log(`request sended to: ` + username)
        })
        .catch(err => {
          this.setState({
            fetchInProgress: false,
            warning: "Username does not exist !"
          })
        })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="body" >
          {(this.state.userInfo && this.state.userInfo.room)
            // ? <div onClick={this.onLogOut} >123213213</div>
            ? <Home
              onLogOut={this.onLogOut}
              userInfo={this.state.userInfo}
            />
            : <Container
              setWarning={this.setWarning}
              clearWarning={this.clearWarning}
              warning={this.state.warning}
              fetchInProgress={this.state.fetchInProgress}
              getData={this.getData}
              onDeclineInvite={this.onDeclineInvite}
              onAceptInvite={this.onAceptInvite}
              onLogOut={this.onLogOut}
              onCancelInvite={this.onCancelInvite}
              onSignIn={this.onSignIn}
              onSignUp={this.onSignUp}
              onsendRequest={this.onsendRequest}
              userInfo={this.state.userInfo}
              friendRequestSended={this.state.friendRequestSended}
              friendRequests={this.state.friendRequests} />}
        </div>
      </div>
    );
  }
}




export default App;
