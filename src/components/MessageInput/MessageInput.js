import React, { Component } from 'react';
import { Input, Button} from 'reactstrap';
import './MessageInput.css';

class MessageInput extends Component {

  handleChat = (e) => {
    if (e.key === 'Enter') {
      this.props.sendChat();
    }
  }
  render() {
    return (
      <div className="MessageInput">
        <Input
          value={this.props.message}
          className="MessageInput-input" 
          type="text" 
          placeholder="Type your message..."
          onChange={this.props.handleMessage}
          onKeyPress={this.handleChat} />
        <Button 
          className="MessageInput-button" 
          color="primary"
          onClick={this.props.sendChat}>
          Send
        </Button>
      </div>
    );
  }
}

export default MessageInput;