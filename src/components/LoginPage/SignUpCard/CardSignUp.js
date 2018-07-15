import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardForm from './CardForm';
import CardFooter from './CardFooter';

class CardSignUp extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader />
                <CardForm
                    setWarning={this.props.setWarning}
                    clearWarning={this.props.clearWarning}
                    warning={this.props.warning}
                    fetchInProgress={this.props.fetchInProgress}
                    containerToShow={this.props.containerToShow}
                    onSignUp={this.props.onSignUp}
                    onSignIn={this.props.onSignIn} />
                <CardFooter
                    containerToShow={this.props.containerToShow} />
            </div>
        );
    }
}

export default CardSignUp;