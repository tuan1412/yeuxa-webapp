import React, { Component } from 'react';

class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = { checkMount: 1 };
  }
  componentDidMount = () => {
    if(this.state.checkMount ===1) {
      this.props.clearWarning();
    }
  }
  render() {

    return (
      <div className="form-group warning text-center">
        {this.props.warning}
      </div>
    );
  }
}

export default Warning;