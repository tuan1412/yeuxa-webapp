import React, { Component } from 'react';

import CardLogo from './CardLogo';
import CardForm from './CardForm';
import CardFooter from './CardFooter';



class CardSignIn extends Component {
    state = {
        username: "",
        password: "",
    }


    onUsernameChange = (newusername) => {
        this.setState({
            username: newusername
        });
    }
    onPasswordChange = (newpassword) => {
        this.setState({
            password: newpassword
        });
    }
    render() {
        return (
            <div className="card">
                <CardLogo />
                <CardForm   onSignIn={this.props.onSignIn}
                            onUsernameChange={this.onUsernameChange} 
                            onPasswordChange={this.onPasswordChange}
                            username={this.state.username}
                            password={this.state.password} />
                <CardFooter containerToShow={this.props.containerToShow}/>
            </div>
        );
    }
}

export default CardSignIn;