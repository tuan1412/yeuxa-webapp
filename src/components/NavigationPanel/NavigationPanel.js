import React, { Component } from 'react';
import MenuList from '../MenuList/MenuList';
import './NavigationPanel.css'
import LoverInfo from '../LoverInfo/LoveInfo';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import SignOutBtn from '../SignOutBtn.js/SignOutBtn';
class NavigationPanel extends Component {
  render() {
    let styles = {};
    const { lover } = this.props;
    if (lover.background !== undefined) {
      styles = {
        background: `url(${lover.background.img.url}) no-repeat center fixed`,
        backgroundSize: 'cover'
      }
    }
    return (
      <div className="NavigationPanel" style={styles}>
        <LoverInfo lover={lover}/>
        <PlaceInfo place={lover.place}/>
        {/* <MenuList /> */}
        <SignOutBtn />
      </div>
    )
  }
}

export default NavigationPanel;