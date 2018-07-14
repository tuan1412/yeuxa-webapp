import React, { Component } from 'react';
import MessageItem from '../MessageItem/MessageItem';

class MessageList extends Component {
  render() {
    const {user, messages, lover } = this.props;
    const messageItems = messages.map(message => {
      let isUser = message.username === user.username;
      return <MessageItem isUser={isUser} message={message.content} user={user} lover={lover}/>
 
    })
    return (
      <div>
        {messageItems}                  
      </div>
    );
  }
}

export default MessageList;