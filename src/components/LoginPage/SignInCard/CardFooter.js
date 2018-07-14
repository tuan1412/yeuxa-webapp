import React, { Component } from 'react';

class CardFooter extends Component {
    containerToShow = event => {
        this.props.containerToShow(false, true)
    }
    render() {
        return (
            <div className="card-footer text-muted">
                Don't have an account? <span className="anchor" onClick={this.containerToShow} >Sign up</span>
            </div>
        );
    }
}

export default CardFooter;