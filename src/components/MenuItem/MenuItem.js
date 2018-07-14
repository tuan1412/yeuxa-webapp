import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
    const { children, icon } = this.props;
    return (
      <div className="MenuItem">
        <FontAwesomeIcon icon={icon} />
        {children}
      </div>
    );
  }
}

export default MenuItem;
