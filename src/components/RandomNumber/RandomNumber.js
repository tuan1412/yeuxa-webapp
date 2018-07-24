import React, { Component } from 'react';
import { Button} from 'reactstrap';
import './RandomNumber.css';

class RandomNumber extends Component {
    state = {
        number: 30
    }

    handleNumber = () => {
        this.setState({
            number: Math.floor(Math.random() * (40 - 30) + 30)
        })
    }

    render() {
        return (
            <div className="RandomNumber">
                {this.state.number}
                <Button
                    className="MessageInput-button"
                    color="primary"
                    onClick={this.handleNumber}>
                    Change
                </Button>
            </div>
        );
    }
}

export default RandomNumber;