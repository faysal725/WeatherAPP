export const PREVIOUS_DAYS = "PREVIOUS_DAYS";
export const PREV_DAY_DATA = "PREV_DAY_DATA";


export const addToDays = (info) =>{
    return {type: PREVIOUS_DAYS, info}
}

export const fiveDayData = (info) =>{
    return {type: PREV_DAY_DATA, info}
}