import React, { Component } from 'react';
import Upload from '../../Upload'

class CardForm extends Component {
    state = {
        avatar: [],
        name: '',
        username: '',
        password: '',
    }
    onChangeName = event => {
        this.setState({ name: event.target.value})
    }
    onChangeUsername = event => {
        this.setState({ username: event.target.value})
    }    
    onChangePassword = event => {
        this.setState({ password: event.target.value})
    }
    onUploadImage = (avatar) => {
        this.setState({avatar: avatar })
    }
    onSignUp = event => {
        event.preventDefault();
        this.props.onSignUp(this.state.avatar, this.state.name, this.state.username, this.state.password, this.props.onsign);
        this.props.containerToShow(false, false, true, false);
    }

    render() {
        return (
            <div className="card-body">
                <form className="form">
                    <Upload onUploadImage={this.onUploadImage} />
                    <div className="form-group">
                        <input onChange={this.onChangeName} type="text" className="form-control" aria-describedby="NameHelp" placeholder="Your Name ?" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangeUsername} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Username (must be unique)" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.onChangePassword} type="password" className="form-control" placeholder="Password" />
                    </div>
                    <button onClick={this.onSignUp} type="submit" className="btn btn-sm btn-block">Sign Up !</button>
                </form>
            </div>
        );
    }
}

export default CardForm;