import React, { Component } from 'react';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardFooter from './CardFooter';

class CardPairing extends Component {

    render() {
        return (
            <div className="card">
                <CardTitle />
                <CardBody
                    onsendRequest={this.props.onsendRequest}
                    onLogOut={this.props.onLogOut} />
                <CardFooter />
            </div >
        );
    }
}

export default CardPairing;