"use client";
import React, { useState } from 'react'
import Header from '../organisms/Header/Header'
import NavigationBar from '../organisms/NavigationBar/NavigationBar';
import TransitionTemplate from './TransitionTemplate';
import BodyTemplate from './BodyTemplate';
import MainSection from '../organisms/MainSection/MainSection';

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
                <BodyTemplate>
                    <MainSection />
                </BodyTemplate>
            </TransitionTemplate>
        </div>
    )
}

export default PortfolioTemplate