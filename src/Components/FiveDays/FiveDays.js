import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDays, fiveDayData } from '../../redux/Actions/DaysActions';

const FiveDays = (props) => {

    const {latitude, longitude, date} = props.daysInfo
    
    // const {prevDay, fiveDayData} = props
    
    let finalData
    

    function daysData(latitude, longitude, date) {

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=e5f3444ec36fdce7bd2d34558d4d7ca2`)
      .then(res => res.json())
      .then(data=> {
        console.log(data)
          });
    }

    daysData(latitude,longitude,date)

    return (
        <div>
            <h1>this is five days</h1>
        </div>
    );
};


const mapStateToProps = state =>{
    return{
        information: state.information,
        daysInfo: state.daysInfo,
        prevDay: state.prevDay
    }
}
const mapDispatchToProps = {
    addToDays: addToDays,
    fiveDayData: fiveDayData
}


export default connect(mapStateToProps, mapDispatchToProps)(FiveDays);
