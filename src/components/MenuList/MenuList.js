import React, { Component } from 'react';
import { faComments, faBookmark, faCog } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../MenuItem/MenuItem';

class MenuList extends Component {
  render() {
    return (
      <div>
        <MenuItem icon={faComments}>Message</MenuItem>
        <MenuItem icon={faBookmark}>Dairy</MenuItem>
        <MenuItem icon={faCog}>Setting</MenuItem>
      </div>
    );
  }
}


export default MenuList;