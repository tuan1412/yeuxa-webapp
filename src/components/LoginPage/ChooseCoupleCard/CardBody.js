import React, { Component } from 'react';
import loading from '../../Ellipsis-1s-200px.gif';

class CardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
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

                    {
                        (this.props.fetchInProgress)
                            ? <div className="btn btn-sm btn-block btn-loading">
                                <img className="loading" src={loading} alt='loading' />
                            </div>
                            : <button onClick={this.onAceptInvite}
                                type="submit"
                                id="cancelInvite-btn"
                                className="btn btn-sm btn-block">Accept Invite</button>

                    }



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