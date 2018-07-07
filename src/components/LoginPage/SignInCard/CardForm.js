import React, { Component } from 'react';

class CardForm extends Component {
    onSignIn = event => {
        this.props.onSignIn(this.props.email, this.props.password)
    }
    onEmailChange = event => {
        this.props.onEmailChange(event.target.value)
    }
    onPasswordChange = event => {
        this.props.onPasswordChange(event.target.value)
    }
    render() {
        return (
            <div className="card-body">
                <div className="form">
                    <div className="form-group">
                        <input onChange={this.onEmailChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button onClick={this.onSignIn} type="submit" className="btn btn-sm btn-block">Sign In ?</button>
                    <div className="form-check">
                        <label className="form-check-label text-muted">
                            <input type="radio" className="form-check-input" />
                            Remember me .....
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardForm;