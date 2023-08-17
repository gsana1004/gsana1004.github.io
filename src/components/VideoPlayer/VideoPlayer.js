import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
    return (
        <div id='video-player'>
             <div className="w3-content w3-justify w3-text-grey w3-padding-large" id="mover">
                <h2 className="w3-text-light-grey">Our Goals</h2>
                <hr style={{width:"200px"}} className="w3-opacity" />
                <div className="w3-responsive">
                    <video controls width="100%">
                    <source src="./images/ez moving infomercial_1692033653185.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                    <h3 className="w3-text-light-grey">"EZ to go EV"</h3>
                    <p>Transitioning from gas-powered trucks to electric trucks holds a host of compelling advantages for a moving truck company. Primarily, the shift drastically reduces the company's environmental footprint by eliminating tailpipe emissions, contributing to cleaner air and a greener future. This move also yields substantial cost savings through lower maintenance needs and the cheaper price of electricity compared to gasoline. Government incentives further sweeten the deal, helping offset the initial investment. Compliance with emissions regulations becomes smoother, positioning the company as a responsible industry player.

        Beyond financial gains, embracing electric trucks enhances the company's image, appealing to environmentally conscious customers and demonstrating innovation. The transition also leads to quieter operations, improving community relations, and potentially boosting employee morale. Additionally, supporting the growth of charging infrastructure aligns with the broader electric vehicle ecosystem and renewable energy adoption.

        In summary, adopting electric trucks not only offers immediate benefits but also secures the company's position as a forward-thinking, environmentally responsible, and financially savvy player in the moving truck industry.</p>

                    <img src="./images/Screenshot 2023-08-15 at 1.53.06 PM.png"/>
              </div>
            </div>
        </div>
    );
};

export default VideoPlayer;