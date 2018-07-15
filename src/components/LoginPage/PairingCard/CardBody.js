import React, { Component } from 'react';
import loading from '../../Ellipsis-1s-200px.gif';
import Warning from '../Warning'

class CardBody extends Component {
  state = {}
  onFriendUsername = event => {
    this.setState({ friendUsername: event.target.value })
  }
  onSendingRequest = event => {
    event.preventDefault();
    this.props.onsendRequest(this.state.friendUsername)
  }
  onLogOut = event => {
    event.preventDefault();
    this.props.onLogOut();
  }
  render() {
    return (
      <div className="card-body" >
        <form className="form">
          <Warning
            clearWarning={this.props.clearWarning}
            warning={this.props.warning} />
          <div className="form-group">
            <input
              onChange={this.onFriendUsername}
              type="text"
              className="form-control"
              id="exampleInputEmail1" aria-describedby="usernamelHelp" placeholder="Enter Username" />
          </div>

          {(this.props.fetchInProgress)
            ? <div className="btn btn-sm btn-block btn-loading">
              <img className="loading" src={loading} alt='loading' />
            </div>
            : <button onClick={this.onSendingRequest} type="submit" id="signUp-btn" className="btn btn-sm btn-block">Send Invite !</button>
          }


          <button onClick={this.onLogOut} type="submit" id="signOut-btn" className="btn btn-sm btn-block">Sign Out !</button>
        </form>
      </div>
    );
  }
}

export default CardBody;