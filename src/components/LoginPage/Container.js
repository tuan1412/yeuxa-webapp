import React, { Component } from 'react';

import CardSignIn from "./SignInCard/CardSignIn";
import CardSignUp from "./SignUpCard/CardSignUp";
import CardPairing from "./PairingCard/CardPairing";
import CardRequestSended from './RequestSendedCard/CardRequestSended'
import CardChooseCouple from './ChooseCoupleCard/CardChooseCouple'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CardSignIn: true,
            CardSignUp: false,
        };
    }

    containerToShow = (CardSignIn, CardSignUp) => {
        this.setState({
            CardSignIn: CardSignIn,
            CardSignUp: CardSignUp,
        })
    }
    onLogOut = () => {
        this.containerToShow(true, false);
        this.props.onLogOut();
    }
    render() {
        if (this.props.userInfo) {

            if (this.props.request.friendRequests.length !== 0) {
                return (
                    <div className="container">
                        {this.props.request.friendRequests.map(request =>
                            <CardChooseCouple
                                fetchInProgress={this.props.fetchInProgress}
                                key={request._id}
                                onLogOut={this.onLogOut}
                                friendRequests={request}
                                onDeclineInvite={this.props.onDeclineInvite}
                                onAceptInvite={this.props.onAceptInvite} />
                        )}
                    </div>
                )
            } else {
                return (
                    <div className="container">
                        {(this.props.request.friendRequestSended.length !== 0)
                            ? <CardRequestSended
                                changeWarning={this.props.changeWarning}
                                changeStatefetch={this.props.changeStatefetch}
                                clearWarning={this.props.clearWarning}
                                warning={this.props.warning}
                                fetchInProgress={this.props.fetchInProgress}
                                onLoginDone={this.props.onLoginDone}
                                friendRequestSended={this.props.request.friendRequestSended}
                                onLogOut={this.onLogOut}
                                onCancelInvite={this.props.onCancelInvite} />
                            : <CardPairing
                                clearWarning={this.props.clearWarning}
                                warning={this.props.warning}
                                fetchInProgress={this.props.fetchInProgress}
                                onsendRequest={this.props.onsendRequest}
                                onLogOut={this.onLogOut} />}
                    </div>
                )
            }
        } else {
            return (
                <div className="container">
                    {this.state.CardSignIn ?
                        <CardSignIn
                            clearWarning={this.props.clearWarning}
                            warning={this.props.warning}
                            fetchInProgress={this.props.fetchInProgress}
                            containerToShow={this.containerToShow}
                            onSignIn={this.props.onSignIn} /> : ""}
                    {this.state.CardSignUp ?
                        <CardSignUp
                            setWarning={this.props.setWarning}
                            clearWarning={this.props.clearWarning}
                            warning={this.props.warning}
                            fetchInProgress={this.props.fetchInProgress}
                            containerToShow={this.containerToShow}
                            onSignIn={this.props.onSignIn}
                            onSignUp={this.props.onSignUp} /> : ""}
                </div>
            );
        }

    }
}

export default Container;