"use client";
import React, { useState } from 'react'
import Header from '../molecules/Header/Header'
import NavigationBar from '../molecules/NavigationBar/NavigationBar';
import TransitionTemplate from './TransitionTemplate';

const PortfolioTemplate = () => {
    const [navBar, setNavBar] = useState(false);

    const toggleNavBar = () => {
        setNavBar(!navBar);
    }
    return (
        <div className='overflow-hidden'>
            <NavigationBar navBar={navBar} setNavBar={setNavBar} />
            <TransitionTemplate show={navBar}>
                <Header toggleNavBar={toggleNavBar} />
            </TransitionTemplate>
        </div>
    )
}

export default PortfolioTemplate