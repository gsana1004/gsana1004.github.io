import React from 'react';
import Counter from './Counter';
import DriverSalary from './DriverSalary';

const DriverApplication = () => {
    return (
        <div id='driver-application'>
            <div className='w3-content w3-justify w3-text-grey w3-padding-64 w3-padding-large'>
                <h3 className="w3-padding-16 w3-text-light-grey">Driver Application</h3>
                    <p className="w3-wide">Name</p>
                    <div className="w3-white">
                    <input type="text" className="w3-input w3-dark-grey"  style={{width:"100%"}} />
                    </div>

                    <p className="w3-wide">Email/Number</p>
                    <div className="w3-white">
                    <input type="text" className="w3-input w3-dark-grey"   style={{width:"100%"}} />
                    </div>

                    <p className="w3-wide">Capable of being a Driver and/or Mover?</p>
                    <div className="w3-white">
                    <input type="text" className="w3-input w3-dark-grey"   style={{width:"100%"}} />
                    </div>
                    <Counter/>

                    <button className="w3-button w3-light-grey w3-padding-large w3-section">
                    <i className="fa fa-download"></i> Upload Resume
                    </button>
                    <button className="w3-button w3-light-grey w3-padding-large w3-section">
                    <i className="fa fa-download"></i> Submit Application
                    </button>
                    <DriverSalary/>
                </div>
        </div>
    );
};

export default DriverApplication;