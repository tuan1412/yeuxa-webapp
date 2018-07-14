import React, { Component } from 'react';

class CardForm extends Component {
    onSignIn = event => {
        event.preventDefault();
        this.props.onSignIn(this.props.username, this.props.password)
    }
    onUsernameChange = event => {
        this.props.onUsernameChange(event.target.value)
    }
    onPasswordChange = event => {
        this.props.onPasswordChange(event.target.value)
    }
    render() {
        return (
            <div className="card-body">
                <form className="form">
                    <div className="form-group">
                        <input onChange={this.onUsernameChange} type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Enter Username" />
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
                </form>
            </div>
        );
    }
}

export default CardForm;