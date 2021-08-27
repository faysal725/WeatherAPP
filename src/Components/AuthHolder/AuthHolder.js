import React from 'react';
import Authentication from '../Authentication/Authentication';

const AuthHolder = () => {
    return (
        <div className="background">
    <div className="card" style={{ alignItems: "center", borderRadius: "20px", border:"none" }}>
        <div className="innercard">
            <Authentication></Authentication>
        </div>
    </div>
    </div>
    );
};

export default AuthHolder;