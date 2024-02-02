"use client";
import React, { useState } from 'react'
import Header from '../organisms/Header/Header'
import NavigationBar from '../organisms/NavigationBar/NavigationBar';
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
                <Header toggleNavBar={toggleNavBar} navBar={navBar} />
            </TransitionTemplate>
        </div>
    )
}

export default PortfolioTemplate