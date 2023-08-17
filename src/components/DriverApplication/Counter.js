import React from 'react';

const Counter = () => {
    return (
        <div id='counter'>
                <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey w3-padding-large">
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">20+</span><br/>
                    Drivers
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">100+</span><br/>
                    Moves Done
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">100+</span><br/>
                    Happy Clients
                    </div>
                    <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">500+</span><br/>
                    Users
                    </div>
                </div>

        </div>
    );
};

export default Counter;