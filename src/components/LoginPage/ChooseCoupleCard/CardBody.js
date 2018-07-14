import React, { Component } from 'react';

class CardBody extends Component {
    onDeclineInvite = event => {
        event.preventDefault();
        this.props.onDeclineInvite(this.props.friendRequests._id, this.props.friendRequests.sender, this.props.friendRequests.receiver);
    }
    onAceptInvite = event => {
        event.preventDefault();
        this.props.onAceptInvite(this.props.friendRequests._id);
    }
    onLogOut = event => {
        event.preventDefault();
        this.props.onLogOut();
    }
    render() {
        return (
            <div className="card-body">
                <form className="form">
                    <button onClick={this.onAceptInvite}
                        type="submit"
                        id="cancelInvite-btn"
                        className="btn btn-sm btn-block">Accept Invite</button>
                    <button
                        onClick={this.onDeclineInvite}
                        type="submit"
                        id="ignore-btn"
                        className="btn btn-sm btn-block ">Ignore Invite</button>
                    <button
                        onClick={this.onLogOut}
                        type="submit"
                        id="signOut-btn"
                        className="btn btn-sm btn-block">Log Out</button>
                </form>
            </div>

        );
    }
}

export default CardBody;