import React, { Component } from 'react';

import CardSignIn from "./SignInCard/CardSignIn";
import CardSignUp from "./SignUpCard/CardSignUp";
import CardPairing from "./PairingCard/CardPairing";
import CardRequestSended from './RequestSendedCard/CardRequestSended'
import CardChooseCouple from './ChooseCoupleCard/CardChooseCouple'

class Container extends Component {
    state = {
        CardSignIn: true,
        CardSignUp: false,
    };
    containerToShow = (CardSignIn, CardSignUp) => {
        this.setState({
            CardSignIn: CardSignIn,
            CardSignUp: CardSignUp,
        })
    }

    render() {
        if (this.props.userInfo) {

            if (this.props.friendRequests) {
                return (
                    <div className="container">
                        {this.props.friendRequests.map(request =>
                            <CardChooseCouple
                                key={request._id}
                                className="stack"
                                onLogOut={this.props.onLogOut}
                                friendRequests={request}
                                onDeclineInvite={this.props.onDeclineInvite}
                                onAceptInvite={this.props.onAceptInvite} />
                        )}

                    </div>
                )
            } else {
                return (
                    <div className="container">
                        {this.props.friendRequestSended
                            ? <CardRequestSended
                                friendRequestSended={this.props.friendRequestSended}
                                onLogOut={this.props.onLogOut}
                                onCancelInvite={this.props.onCancelInvite} />
                            : <CardPairing
                                onsendRequest={this.props.onsendRequest}
                                onLogOut={this.props.onLogOut} />}
                    </div>
                )
            }
        } else {
            return (
                <div className="container">
                    {this.state.CardSignIn ?
                        <CardSignIn
                            containerToShow={this.containerToShow}
                            onSignIn={this.props.onSignIn} /> : ""}
                    {this.state.CardSignUp ?
                        <CardSignUp
                            containerToShow={this.containerToShow}
                            onSignIn={this.props.onSignIn}
                            onSignUp={this.props.onSignUp} /> : ""}
                </div>
            );
        }

    }
}

export default Container;