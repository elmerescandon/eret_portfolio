"use client";
import React, { useEffect, useState } from 'react'
import Header from '../organisms/Header/Header'
import NavigationBar from '../organisms/NavigationBar/NavigationBar';
import TransitionTemplate from './TransitionTemplate';
import BodyTemplate from './BodyTemplate';
import MainSection from './MainSection';
import SecondarySection from './SecondarySection';
import Sidebar from '../molecules/SideBar/Sidebar';
import RailBar from '../organisms/RailBar/RailBar';

const PortfolioTemplate = () => {
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (windowSize.innerWidth > 1280) {
            setNavBar(false)
        }
    }, [windowSize]);


    const [navBar, setNavBar] = useState(false);
    const toggleNavBar = () => {
        setNavBar(!navBar);
    }
    return (
        <div className='flex flex-grow max-xl:overflow-hidden  max-xl:block'>
            {windowSize.innerWidth <= 1280 && <NavigationBar navBar={navBar} setNavBar={setNavBar} />}
            <RailBar />
            <TransitionTemplate show={navBar}>
                <Header toggleNavBar={toggleNavBar} navBar={navBar} />
                <div className='max-xl:flex max-md:block'>
                    {!navBar && <Sidebar />}
                    <BodyTemplate>
                        <MainSection />
                        <SecondarySection />
                        <p className='italic text-gray-600'>Last updated: February 2024</p>
                    </BodyTemplate>
                </div>

            </TransitionTemplate>
        </div>
    )
}

export default PortfolioTemplate