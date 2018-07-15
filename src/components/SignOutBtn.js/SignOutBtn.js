import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './SignOutBtn.css';

class SignOutBtn extends Component {
  render() {
    return (
        <Button outline color="secondary SignOutBtn" size="sm">Sign Out</Button>
    );
  }
}

export default SignOutBtn;