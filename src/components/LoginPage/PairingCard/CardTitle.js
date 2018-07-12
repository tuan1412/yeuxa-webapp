import React, { Component } from 'react';

class CardTitle extends Component {
  render() {
    return (
      <div className="card-body">
      <div className="web-logo text-center">
        <span className="logo">Invite</span>
        <p className="instruction-helper">Pair up with your partner by entering their Username</p>
      </div>
    </div>
    );
  }
}

export default CardTitle;