import React, { Component } from 'react';

class CardForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }
    onChangeName = event => {
        this.setState({ name: event.target.value})
    }
    onChangeEmail = event => {
        this.setState({ email: event.target.value})
    }    
    onChangePassword = event => {
        this.setState({ password: event.target.value})
    }
    onSignUp = event => {
        this.props.onSignUp(this.state.name, this.state.email, this.state.password)
    }
    render() {
        return (
            <div className="card-body">
                <div className="form">
                    <div className="form-group">
                        <input onChange={this.onChangeName} type="text" className="form-control" aria-describedby="NameHelp" placeholder="Your Name ?" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangeEmail} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangePassword} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button onClick={this.onSignUp} type="submit" className="btn btn-sm btn-block">Sign Up !</button>
                </div>
            </div>
        );
    }
}

export default CardForm;