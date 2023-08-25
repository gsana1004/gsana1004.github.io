import React from 'react';

const DriverSalary = () => {
    return (
        <div id='driver-salry'>
<h3 className="w3-padding-24 w3-text-light-grey">Benefits for Movers and Customers</h3>
<p>EZ Moving's innovative platform fosters a mutually beneficial relationship between movers and customers. For drivers, EZ Moving offers the flexibility to earn extra income on their own schedule without the need for specialized skills. It's a perfect opportunity for those seeking supplemental earnings, as well as individuals with varying commitments. Meanwhile, customers reap the benefits of EZ Moving's convenience, affordability, and transparency. With just a few taps on their smartphones, customers can access reliable movers, often at a lower cost than traditional alternatives. Real-time tracking, safety features, and the ability to rate movers ensure a secure and quality experience. Ultimately, EZ Moving's seamless integration of driver availability and passenger demand creates a harmonious win-win situation, enhancing convenience and economic opportunities for both parties.</p>
            <h3 className="w3-padding-16 w3-text-light-grey w3-padding-large">Average Mover Salary</h3>
            <div className="w3-row-padding " style={{marginTop:"0 -16px", padding:'0'}}>
            <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Part Time</li>
            <li className="w3-padding-16">Flexible Schedule</li>
            <li className="w3-padding-16">Minimal Entry Barriers</li>
            <li className="w3-padding-16">Supplemental Income</li>
            <li className="w3-padding-16">3 Hr Maximum Job Length</li>
            <li className="w3-padding-16">
            <h2>$ 300</h2>
            <span className="w3-opacity">Average Pay Per Move</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
            <button 
    className="w3-button w3-white w3-padding-large w3-hover-black"
    onClick={() => {
        document.getElementById('driver-application').scrollIntoView({ behavior: 'smooth' });
    }}
>
    Sign Up
</button>

            </li>
            </ul>
            </div>

            <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Full Time</li>
            <li className="w3-padding-16">Fixed Schedule</li>
            <li className="w3-padding-16">Substantial Entry Barriers</li>
            <li className="w3-padding-16">Primary Income</li>
            <li className="w3-padding-16">No Maximum Job Length</li>
            <li className="w3-padding-16">
            <h2>$ 800</h2>
            <span className="w3-opacity">Average Pay Per Move</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
            <button 
    className="w3-button w3-white w3-padding-large w3-hover-black"
    onClick={() => {
        document.getElementById('driver-application').scrollIntoView({ behavior: 'smooth' });
    }}
>
    Sign Up
</button>
            </li>
            </ul>
            </div>

            </div>
            <div className="w3-content w3-justify w3-text-grey" id="mover">
        </div>
        </div>
    );
};

export default DriverSalary;
