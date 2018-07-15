import React, { Component } from 'react';
import MessageItem from '../MessageItem/MessageItem';

class MessageList extends Component {

  render() {
    const { user, messages, lover } = this.props;
    const messageItems = messages.map(message => {
      let isUser = message.userName === user.username;
      return <MessageItem isUser={isUser} message={message.body} user={user} lover={lover} />

    })
    return (
      <div>
        {messageItems}
      </div>
    );
  }
}

export default MessageList;