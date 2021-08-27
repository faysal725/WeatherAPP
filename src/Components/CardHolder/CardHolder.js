import React from 'react';
import './CardHolder.css'
import GlassCard from '../GlassCard/GlassCard';
import Authentication from '../Authentication/Authentication';

const CardHolder = () => {
    return (
        <div className="background">
            <div className="card" style={{ alignItems: "center", borderRadius: "20px", border:"none" }}>
                <div className="innercard">

                    <GlassCard></GlassCard>
                    {/* <Authentication></Authentication> */}
                </div>
            </div>
        </div>
    );
};

export default CardHolder;