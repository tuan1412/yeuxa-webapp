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
                    clearWarning={this.props.clearWarning}
                    warning={this.props.warning}
                    fetchInProgress={this.props.fetchInProgress}
                    onsendRequest={this.props.onsendRequest}
                    onLogOut={this.props.onLogOut} />
                <CardFooter />
            </div >
        );
    }
}

export default CardPairing;