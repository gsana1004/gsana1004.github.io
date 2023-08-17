import React from 'react';

const Banner = () => {
    const headingStyle = {
        paddingBottom: '150px'
    };

    return (
        <div id='banner'>
            <div className="w3-padding-large" id="main">
                <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
                    <h1 className="w3-jumbo" style={headingStyle}>
                        <span className="w3-hide-small">This is </span>
                        EZ Moving.
                    </h1>

                    <img src="./images/removebg-preview.png" style={{ paddingBottom: '200px' }} alt='ez moving' />
                    <p>"The Future of Moving." - New York Times</p>
                    <p>"This marks a pivotal moment in the tech industry." - Forbes</p>
                    <p>"The industry landscape will never be the same again." - Elon Musk</p>
                </header>
            </div>
        </div>
    );
};

export default Banner;
