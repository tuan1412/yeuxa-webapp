import React, { Component } from 'react';
import { Button} from 'reactstrap';
import './RandomNumber.css';

class RandomNumber extends Component {

    render() {
        const { number, handleNumber } = this.props;
        return (
            <div className="RandomNumber">
                {number}
                <Button
                    className="MessageInput-button"
                    color="primary"
                    onClick={handleNumber}>
                    Change
                </Button>
            </div>
        );
    }
}

export default RandomNumber;