import React from 'react';
import '../../App.css';

const Contact = () => {
    return (
        <div id='contact'>
            <div className="w3-padding-64 w3-content w3-text-grey w3-padding-large" id="contact">
        <h2 className="w3-text-light-grey">Contact Us</h2>
        <hr style={{width:"200px"}} className="w3-opacity" />

        <div className="w3-section">
        <p className='w3-text-grey' style={{margin:"15px 0"}}><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> 11 Broadway St, New York, US</p>
        <p className='w3-text-grey' style={{margin:"15px 0"}}><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +1 516-830-0428</p>
        <p className='w3-text-grey' style={{margin:"15px 0"}}><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: EZMoving@gmail.com</p>
        </div><br/>
        <p className='w3-text-grey' style={{margin:"15px 0"}}>Let's get in touch. Send me a message:</p>

        <form action="/action_page.php" target="_blank">
        <p style={{margin:"15px 0"}}><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
        <p style={{margin:"15px 0"}}><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email" /></p>
        <p style={{margin:"15px 0"}}><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject" /></p>
        <p style={{margin:"15px 0"}}><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"  /></p>
        <p style={{margin:"15px 0"}}>
        <button className="truck-button">
        <span className="default">Send Message</span>
        </button>


        </p>
        </form>

        </div>
        </div>
    );
};

export default Contact;