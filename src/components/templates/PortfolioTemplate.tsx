"use client";
import React, { useState } from 'react'
import Header from '../organisms/Header/Header'
import NavigationBar from '../organisms/NavigationBar/NavigationBar';
import TransitionTemplate from './TransitionTemplate';
import BodyTemplate from './BodyTemplate';
import MainSection from './MainSection';
import SecondarySection from './SecondarySection';
import Sidebar from '../molecules/SideBar/Sidebar';

const PortfolioTemplate = () => {
    const [navBar, setNavBar] = useState(false);

    const toggleNavBar = () => {
        setNavBar(!navBar);
    }
    return (
        <div className='overflow-hidden'>
            <NavigationBar navBar={navBar} setNavBar={setNavBar} />
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