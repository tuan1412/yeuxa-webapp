import React, { Component } from 'react';
import img from '../../images/partnerphoto-default.png';
import './LoverInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


class LoverInfo extends Component {
    
    render() {
        const { lover } = this.props;
        return (
            <div className="LoveInfo">
                <img src={lover.imgUrl || ''} alt="Anh" />
                <span> {lover.fullname || ''} </span>
                {lover.online ? (
                    <span className="status"> <FontAwesomeIcon icon={faCircle} color="#42b72a" size="xs"/> Online</span>
                ):(
                    <span className="status"> <FontAwesomeIcon icon={faCircle} color="#eee" size="xs"/> Offline</span> 
                )}
            </div>
        );
    }
}

export default LoverInfo;   