
import { useState } from "react";
import FiveDays from "../FiveDays/FiveDays";
import SearchPlace from "../SearchPlace/SearchPlace";
import TodaysForcast from "../TodaysForcast/TodaysForcast";
import './GlassCard.css';


const GlassCard = () => {
    
    const [fiveDays, setFiveDays] = useState(false)
    console.log(fiveDays)

    return (
    <div className="background">
    <div className="card" style={{ alignItems: "center", borderRadius: "20px", border:"none" }}>
        <div className="innercard">
            <div className="container pt-5">
                
                {
                    fiveDays ? <FiveDays></FiveDays>:<SearchPlace fiveDays={fiveDays} setFiveDays={setFiveDays}></SearchPlace>
                }
            </div>
        </div>
    </div>
    </div>
    );
};

export default GlassCard;