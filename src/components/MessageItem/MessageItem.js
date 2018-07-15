import React, { Component } from 'react';
import img from '../../images/partnerphoto-default.png';
import '../MessageItem/MessageItem.css';
import classNames from 'classnames';

class MessageItem extends Component {
  render() {
    const { isUser, message, user, lover } = this.props;
    
    return (
      <div className={ classNames('MessageItem',
                                 {'user': isUser},
                                 {'parter': !isUser})}>
        <div className="MessageItem-avatar">
          <img src={isUser ? user.imgUrl : lover.imgUrl} alt="Avatar" />
        </div>
        <div className="MessageItem-content">
        { message }
        </div>
      </div>
    );
  }
}

export default MessageItem;