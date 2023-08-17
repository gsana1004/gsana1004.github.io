import React from 'react';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import HireDriver from '../../components/HireDriver/HireDriver';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
// import Chatbot from '../../components/Chatbot';
import AppVideo from '../../components/AppVideo/AppVideo';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import DriverApplication from '../../components/DriverApplication/DriverApplication';

const Home = () => {
    return (
        <div id='home'>
              <Navbar/>
            <Banner/>
            {/* <Chatbot/> */}
            <VideoPlayer/>
        <HireDriver/>
            <AppVideo/>
            <DriverApplication/>
        <Contact/>
        <Footer/>
        </div>
    );
};

export default Home;