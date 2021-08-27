import React, { useContext } from 'react';
import './TodaysForcast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { DaysContext } from '../../App';
import { addToDays } from '../../redux/Actions/DaysActions';
import {connect} from 'react-redux'

const TodaysForcast = (props) => {

const {coord, dt, main, name, sys, weather} = props.place



    return (
        <div className="container pt-3 pb-3 days_card">
            <h3>Todays Forcast</h3>
            <h4><b>{name}</b></h4>
            <h6>Condition: {weather[0].main} </h6>
            <div className="info_part_card">
            <ul>
                <li>Hight Temp: {main.temp_max}</li>
                <li>Low Temp: {main.temp_min}</li>
                <li>Geo Cordinates:
                    <ul>
                        <li>Lat: {coord.lat}</li>
                        <li>Lon: {coord.lon}</li>
                    </ul>
                </li>
                <li>Humidity: {main.humidity}</li>
                <li>Sunrise: {sys.sunrise}</li>
                <li>Sunset: {sys.sunset}</li>
            </ul>
            </div>
        </div>
    );
};



export default TodaysForcast;