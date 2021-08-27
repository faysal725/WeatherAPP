import React from "react";
import { addToDays, PREVIOUS_DAYS, PREV_DAY_DATA } from "../Actions/DaysActions";

const initialState = {
    information: [
        {name: "robinfffffffffff"}
    ],
    daysInfo:[],
    prevDay:[]
} 

const DaysReducers = (state = initialState, action) =>{

    switch(action.type){

        case PREVIOUS_DAYS:
            
            let newInfo = action.info
            let latitude = newInfo.coord.lat
            let longitude = newInfo.coord.lon
            let date = newInfo.dt
            let totalInfo = {latitude, longitude, date}
            
            return {information: state.information, daysInfo: totalInfo}
        

        case PREV_DAY_DATA:
            
            let prevInfo= action.info.daily 
            
            let updatedInfo = {...state.prevDay, prevInfo}
            console.log(updatedInfo)
            return {...state, prevDay: updatedInfo}
        default:
            return state;
    }
}

export default DaysReducers;