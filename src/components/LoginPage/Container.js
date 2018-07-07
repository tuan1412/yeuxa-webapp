import React, { Component } from 'react';

import CardSignIn from "./SignInCard/CardSignIn";
import CardSignUp from "./SignUpCard/CardSignUp";

class Container extends Component {
    state = {
        CardSignIn: true,
        CardSignUp: false,
        CardPairing: false,
        CardCancelInvite: false,
    };
    containerToShow = (CardSignIn, CardSignUp, CardPairing, CardCancelInvite) => {
        this.setState({
            CardSignIn: CardSignIn,
            CardSignUp: CardSignUp,
            CardPairing: CardPairing,
            CardCancelInvite: CardCancelInvite,
        })
    }
    render() {
        return (
            <div className="container">
                {this.state.CardSignIn ? <CardSignIn containerToShow={this.containerToShow} onSignIn={this.props.onSignIn} /> : ""}
                {this.state.CardSignUp ? <CardSignUp containerToShow={this.containerToShow} onSignUp={this.props.onSignUp} /> : ""}
            </div>
        );
    }
}

export default Container;