import React, { Component } from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import './MessageField.css'

class MessageField extends Component {

  componentDidUpdate = (previousProps, previousState) => {
    if (this.refs.chatoutput != null) {
      this.refs.chatoutput.scrollTop = this.refs.chatoutput.scrollHeight;
    }
  }
  
  render() {
    // const { messages, username } = this.props;
    return (
      <div className="MessageFeild">
        <div ref='chatoutput' className="MessageFeild-list">
          <MessageList {...this.props}/>
        </div>
        <div className="MessageFeild-input">
         <MessageInput sendChat={this.props.sendChat} handleMessage={this.props.handleMessage} message={this.props.chatContent}/>
        </div>
        
      </div>
    );
  }
}

export default MessageField;