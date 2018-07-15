import React, { Component } from 'react';
import Upload from '../../Upload';
import loading from '../../Ellipsis-1s-200px.gif';
import Warning from "../Warning";

class CardForm extends Component {
    state = {
    }
    onChangeName = event => {
        this.setState({ name: event.target.value })
    }
    onChangeUsername = event => {
        this.setState({ username: event.target.value })
    }
    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }
    onUploadImage = (avatar) => {
        this.setState({ avatar: avatar })
    }
    onSignUp = event => {
        event.preventDefault();
        if (!this.state.avatar || !this.state.name || !this.state.username || !this.state.password) {
            this.props.setWarning('Please fill in all the fields, including Avatar !')
        } else {
            this.props.onSignUp(this.state.avatar, this.state.name, this.state.username, this.state.password, this.props.onsign);
        }
    }

    render() {
        return (
            <div className="card-body">
                <form className="form">
                    <Upload onUploadImage={this.onUploadImage} />
                    <Warning
                        clearWarning={this.props.clearWarning}
                        warning={this.props.warning}
                    />
                    <div className="form-group">
                        <input onChange={this.onChangeName} type="text" className="form-control" aria-describedby="NameHelp" placeholder="Your Name ?" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangeUsername} type="text" className="form-control important" aria-describedby="emailHelp" placeholder="Enter Username (must be unique)" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangePassword} type="password" className="form-control important" placeholder="Password" />
                    </div>
                    {(this.props.fetchInProgress)
                        ? <div className="btn btn-sm btn-block btn-loading">
                            <img className="loading" src={loading} alt='loading' />
                        </div>
                        : <button onClick={this.onSignUp} type="submit" className="btn btn-sm btn-block">Sign Up !</button>
                    }




                </form>
            </div>
        );
    }
}

export default CardForm;