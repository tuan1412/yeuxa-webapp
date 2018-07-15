import React, { Component } from 'react';
import loading from '../../Ellipsis-1s-200px.gif';
import Warning from "../Warning"

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
                    <Warning
                        clearWarning={this.props.clearWarning}
                        warning={this.props.warning} />
                    <div className="form-group">
                        <input onChange={this.onUsernameChange} type="text" className="form-control" aria-describedby="usernameHelp" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onPasswordChange} type="password" className="form-control" placeholder="Password" />
                    </div>
                    {
                        (this.props.fetchInProgress)
                            ? <div className="btn btn-sm btn-block btn-loading">
                                <img className="loading" src={loading} alt='loading' />
                            </div>
                            : <button onClick={this.onSignIn} type="submit" className="btn btn-sm btn-block">Sign In ?</button>


                    }
                    <div className="form-check">

                    </div>
                </form>
            </div>
        );
    }
}

export default CardForm;