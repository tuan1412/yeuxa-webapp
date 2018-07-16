import React, { Component } from 'react';
import axios from '../../../axios'
import loading from '../../Ellipsis-1s-200px.gif';
import Warning from "../Warning"

class CardRequestSended extends Component {
    onCancelInvite = event => {
        event.preventDefault();
        this.props.changeStatefetch();

        axios.get("https://yeuxa-api.herokuapp.com/api/friend/list-invitation", {
        })
            .then(response => {
                if(!response.data.room) this.props.changeWarning('Please keep waiting for he/she to accept');
                this.props.onLoginDone(response);
            })
            .catch(err => console.log(err));
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
                        <p className="instruction-helper">Waiting for {this.props.friendRequestSended[0].receiver} to accept your invite.</p>
                    </div>
                </div>
                <div className="card-body">
                    <Warning
                        clearWarning={this.props.clearWarning}
                        warning={this.props.warning} />
                    <form className="form">
                        {
                            (this.props.fetchInProgress)
                                ? <div className="btn btn-sm btn-block btn-loading">
                                    <img className="loading" src={loading} alt='loading' />
                                </div>
                                : <button onClick={this.onCancelInvite} type="submit" id="cancelInvite-btn" className="btn btn-sm btn-block">Refresh (to see if they accepted)</button>


                        }


                        <button onClick={this.onLogOut} type="submit" id="signOut-btn" className="btn btn-sm btn-block">Sign Out !</button>
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