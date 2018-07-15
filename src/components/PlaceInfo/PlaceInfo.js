import React, { Component } from 'react';
import './PlaceInfo.css';

class PlaceInfo extends Component {
    render() {
        const { place = {}, weather } = this.props;
        const { city, country } = place;
        const { des, temp, icon } = weather;
        return (
            <div className="PlaceInfo">
                {icon && <img alt="icon" src={`https://openweathermap.org/img/w/${icon}.png`}/>}
                {des && (<span>{des}, {temp}° </span>)}
                {city && (<span>{city}, {country}</span>)}
            </div>

        );
    }
}

export default PlaceInfo;