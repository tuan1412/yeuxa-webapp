import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import 'react-fontawesome';
import axios from './axios';

import Container from "./components/LoginPage/Container";


class App extends Component {

  state = {};
  onLoginDone = (lists) => {
    let newFriendRequests = [];
    let newFriendRequestSended = [];
    lists.data.forEach(list => {
      (list.sender === this.state.userInfo.username) ? newFriendRequestSended.push(list) : newFriendRequests.push(list);
    })
    if (newFriendRequestSended.length > 0) this.setState({ friendRequestSended: newFriendRequests })
    if (newFriendRequests.length > 0) this.setState({ friendRequests: newFriendRequests });
  }

  componentWillMount = () => {
    axios.get("https://yeuxa-api.herokuapp.com/api/auth/")
      .then(response => {
        if (response.data) {
          console.log('logged in')
          console.log(response.data);
          this.setState({ userInfo: response.data });
          return axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {
          })
        }
      })
      .then(lists => this.onLoginDone(lists))
      .catch(err => console.log(err));
  }

  onSignIn = (username, password, setupLogin) => {
    console.log(username);
    axios.post("https://yeuxa-api.herokuapp.com/api/auth/", {
      username: username,
      password: password,
    })
      .then(response => {
        this.setState({ userInfo: response.data });
        return axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {
        })
      })
      .then(lists => this.onLoginDone(lists))
      .catch(err => console.error(err));
  }
  onSignUp = (avatar, name, username, password, onSignIn) => {
    var formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("fullname", name);
    formData.append("username", username);
    formData.append("password", password);
    axios.post("https://yeuxa-api.herokuapp.com/api/users/", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => this.onSignIn(username, password))
      .catch(err => console.error(err));
  }

  onLogOut = () => {
    axios.delete('https://yeuxa-api.herokuapp.com/api/auth');
    this.setState({
      friend: null,
      userInfo: null
    });
  }
  onAceptInvite = (id, sender, receiver) => {
    axios.put('https://yeuxa-api.herokuapp.com/api/friend/accept-invitation', { id })
      .then(response => {
        var friend;
        (this.state.userInfo.username === sender) ? friend = receiver : friend = sender;
        this.setState({
          friendRequests: null,
          friend: friend
        });
        console.log('Request Accepted')
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
    axios.post('https://yeuxa-api.herokuapp.com/api/friend/add-friend', {
      username: username
    })
      .then(response => {
        this.setState({ friendRequestSended: username })
        console.log(`request sended to: ` + username)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="body" >
          {(this.state.userInfo && this.state.friend)
            ? "Chatroom"
            : <Container
              onDeclineInvite={this.onDeclineInvite}
              onAceptInvite={this.onAceptInvite}
              onLogOut={this.onLogOut}
              onCancelInvite={this.onCancelInvite}
              onSignIn={this.onSignIn}
              onSignUp={this.onSignUp}
              onsendRequest={this.onsendRequest}
              userInfo={this.state.userInfo}
              friend={this.state.friend}
              friendRequestSended={this.state.friendRequestSended}
              friendRequests={this.state.friendRequests} />}
        </div>
      </div>
    );
  }
}




export default App;
