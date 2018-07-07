import React, { Component } from 'react';

import CardHeader from './CardHeader';
import CardForm from './CardForm';
import CardFooter from './CardFooter';

class CardSignUp extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader />
                <CardForm onSignUp={this.props.onSignUp} />
                <CardFooter containerToShow={this.props.containerToShow} />
            </div>
        );
    }
}

export default CardSignUp;