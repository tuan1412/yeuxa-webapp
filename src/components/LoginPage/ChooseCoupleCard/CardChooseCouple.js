import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardBody from './CardBody';

class CardChooseCouple extends Component {
  render() {
    return (
      <div className="card">
        <CardHeader friendRequests={this.props.friendRequests} />
        <CardBody
          onLogOut={this.props.onLogOut}
          onDeclineInvite={this.props.onDeclineInvite}
          onAceptInvite={this.props.onAceptInvite}
          friendRequests={this.props.friendRequests} />
        <CardFooter />
      </div>
    );
  }
}

export default CardChooseCouple;