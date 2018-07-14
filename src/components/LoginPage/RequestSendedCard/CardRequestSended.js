import React, { Component } from 'react';

class CardRequestSended extends Component {
    onCancelInvite = event => {
        event.preventDefault();
        this.props.onCancelInvite();
    }
    onLogOut = event => {
        event.preventDefault();
        this.props.onLogOut();
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="web-logo text-center">
                        <span className="waiting-helper">Waiting for Parter</span>
                        <p className="instruction-helper">Waiting for {this.props.friendRequestSended} to accept your invite.</p>
                    </div>
                </div>
                <div className="card-body">
                    <form className="form">
                        <button onClick={this.onCancelInvite} type="submit" id="cancelInvite-btn" className="btn btn-sm btn-block">Cancel Invite !</button>
                        <button onClick={this.onLogOut}type="submit" id="signOut-btn" className="btn btn-sm btn-block">Sign Out !</button>
                    </form>
                </div>

                <div className="card-footer text-muted text-center">
                    <p>She still lives inside of me</p> <p>We've never been apart</p>
                </div>
            </div>
        );
    }
}

export default CardRequestSended;