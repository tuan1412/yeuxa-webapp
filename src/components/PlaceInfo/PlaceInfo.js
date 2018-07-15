import React, { Component } from 'react';
import cloudy from '../../images/cloudy.svg';
import './PlaceInfo.css';

class PlaceInfo extends Component {
    render() {
        const { place = {} } = this.props;
        const { city, country } = place;
        return (
            <div className="PlaceInfo">
                <img src={cloudy} alt="cloudy" />
                {city && (<span>{city}, {country}</span>)}
            </div>

        );
    }
}

export default PlaceInfo;