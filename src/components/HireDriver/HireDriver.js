import React from 'react';

const HireDriver = () => {
    return (
        <div id='hire'>
        <div className="w3-padding-64 w3-content w3-padding-large" id="customers">
            <h2 className="w3-text-light-grey">Hire Driver and Mover</h2>
            <hr style={{width:"200px"}} className="w3-opacity" /> 
            <div className="w3-row-padding" style={{margin:"0 -16px"}}>
            <div className="w3-half">
            <p>1st Step: Download "EZ Moving" App on App Store
            </p>
            <p className='w3-text-grey' style={{margin:"15px 0"}}>2nd Step: Sign Up for a Free Account</p>
            <p className='w3-text-grey' style={{margin:"15px 0"}}>3rd Step: Send Images of Your Moving Job</p>
            <p className='w3-text-grey' style={{margin:"15px 0"}}>4th Step: Recieve a Quote and Set an Appointment</p>
            <p className='w3-text-grey' style={{margin:"15px 0"}}>5th Step: Make Payment After Move</p>

            <img src="/images/black_box-removebg-preview.png" style={{width:"50%", marginBottom:'12px'}} alt='black box'/>
            </div>
            <div>
            </div>
            <div className="w3-half">
            </div>

            </div>

              <img src="/images/Unknown-removebg-preview (1).png" style={{width:"25%"}} alt='' />
            </div>
        </div>
    );
};

export default HireDriver;