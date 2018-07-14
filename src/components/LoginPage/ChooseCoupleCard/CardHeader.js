import React, { Component } from 'react';

class CardHeader extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="web-logo text-center">
                    <span className="waiting-helper">Waiting for Parter</span>
                    <p className="instruction-helper">{this.props.friendRequests.sender} </p>
                    <p className="instruction-helper">Wants to couple with you!</p>
                </div>
            </div>
        );
    }
}

export default CardHeader;