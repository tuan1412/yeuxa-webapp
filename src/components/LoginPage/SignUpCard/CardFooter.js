import React, { Component } from 'react';

class CardFooter extends Component {
    containerToShow = event => {
        console.log('áđâsd');
        this.props.containerToShow(true, false)
    }
    render() {
        return (
            <div className="card-footer text-muted">
                Already have an account? <span className="anchor" onClick={this.containerToShow} >Sign In</span>
            </div>
        );
    }
}

export default CardFooter;