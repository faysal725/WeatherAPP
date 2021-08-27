import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addToDays } from "../../redux/Actions/DaysActions";
import TodaysForcast from '../TodaysForcast/TodaysForcast';
import { connect } from 'react-redux';
import './SearchPlace.css'

const SearchPlace = (props) => {
    
    const [place, setPlace] = useState()
    
    
    const {fiveDays, setFiveDays} = props
    const {information, addToDays, daysInfo} = props


        // console.log(daysInfo)    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        let placeName = data.placeName
        // console.log(placeName)
        weather(placeName)
    };

    function weather(placeName) {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=e5f3444ec36fdce7bd2d34558d4d7ca2`)
      .then(res => res.json())
      .then(data=> {
          setPlace(data)
          addToDays(data)
          });
    }


    return (
        <>
            <h1>Weather App</h1>
            <div className="d-flex row">
                <div className="col-sm-12 col-md-6">
                    <div className="pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="search_input" placeholder="Place Name" {...register("placeName")} />
                            <br /><br />
                            <input className="search_submit" type="submit" value="Search"/>
                        </form>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6 text-white pt-5">
                    {
                        place ? 
                        <>
                        <TodaysForcast place={place}></TodaysForcast>
                        <p onClick={() => setFiveDays(!fiveDays)} >
                        <Link to="/glassCard">Five Days Data</Link><br />
                        <Link to="/auth">Sign In</Link>
                        </p>
                        </>
                        : <h2>No data to show</h2>
                    }
                        
                </div>
            </div>
        </>
    );
};





const mapStateToProps = state =>{
    return{
        information: state.information,
        daysInfo: state.daysInfo
    }
}
const mapDispatchToProps = {
    addToDays: addToDays
}





export default connect(mapStateToProps, mapDispatchToProps)(SearchPlace);