import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        isLogin: false
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleLogin = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {
        const { isLogin, username } = this.state;
        return (
            <div>
                {!isLogin ? (
                    <div>
                        <input type="text" onChange={this.handleChange} />
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                ) : (
                    <Redirect to={{
                        pathname: '/chat',
                        state: {
                            username
                        }
                    }} />
                )}

            </div>
        );
    }
}

export default Login;