import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile'
import Timeline from '../Timeline/Timeline'
import PopupInfo from '../PopupInfo/PopupInfo';
import Works from '../Works/Works';
import './index.css'
import Footer from '../Footer/Footer';
import OngoingProjects from '../OngoingProjects/OngoingProjects';
import Sidebar from '../Sidebar/Sidebar';
import StacksBlock from '../StacksBlock/StacksBlock';


const Home = () => {
    const [showBlock, setShowBlock] = useState(false);
    const [popupInfo, setPopupInfo] = useState(null);

    function handleOnclick(info) {
        setShowBlock(true);
        setPopupInfo(info);
    }

    function closeFilter() {
        setShowBlock(false);
        setTimeout(() => setPopupInfo(null), 200);
    }

    return (
        <div className='container'>

            <div className={showBlock ? 'fade-in' : 'fade-out'} id='background-filter' onClick={closeFilter}>
            {popupInfo && <PopupInfo info={popupInfo} />}
            </div>

            <Sidebar></Sidebar>

            <Profile></Profile>

            <h1 className='container-title'>Education</h1>

            <Timeline handleOnclick={handleOnclick}></Timeline>



            <h1 className='container-title'>My Works</h1>
            <Works handleOnclick={handleOnclick}></Works>


            <h1 className='container-title'>My Projects</h1>
            <OngoingProjects handleOnclick={handleOnclick}></OngoingProjects>

            <h1 className='container-title'>My Stacks</h1>
            <StacksBlock></StacksBlock>

            <Footer></Footer>
        </div>
    );
};

export default Home




