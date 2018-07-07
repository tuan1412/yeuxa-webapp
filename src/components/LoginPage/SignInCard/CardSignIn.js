import React, { Component } from 'react';

import CardLogo from './CardLogo';
import CardForm from './CardForm';
import CardFooter from './CardFooter';



class CardSignIn extends Component {
    state = {
        email: "",
        password: "",
    }


    onEmailChange = (newemail) => {
        this.setState({
            email: newemail
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
                            onEmailChange={this.onEmailChange} 
                            onPasswordChange={this.onPasswordChange}
                            email={this.state.email}
                            password={this.state.password} />
                <CardFooter containerToShow={this.props.containerToShow}/>
            </div>
        );
    }
}

export default CardSignIn;