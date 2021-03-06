import React, { Component } from 'react';
import './NavigationPanel.css'
import LoverInfo from '../LoverInfo/LoveInfo';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import SignOutBtn from '../SignOutBtn.js/SignOutBtn';
import RandomNumber from '../RandomNumber/RandomNumber';
class NavigationPanel extends Component {
  render() {
    let styles = {};
    let place = {};
    let weather = {};
    const { lover, onLogOut, number, handleNumber } = this.props;
    if (lover.place !== undefined) {
      if (lover.place.img !== undefined) {
        styles = {
          background: `url(${lover.place.img.url}) no-repeat`,
          backgroundSize: 'cover'
        }
      }
     
      place = lover.location;
      weather = lover.place.weather;
    }
    return (
      <div className="NavigationPanel" style={styles}>
        <LoverInfo lover={lover}/>
        <PlaceInfo place={place} weather={weather}/>
        <RandomNumber number={number} handleNumber={handleNumber}/>
        <SignOutBtn onLogOut={onLogOut}/>
      </div>
    )
  }
}

export default NavigationPanel;