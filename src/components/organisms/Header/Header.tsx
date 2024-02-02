import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

type HeaderTypes = {
    toggleNavBar: () => void;
    navBar: boolean;
}

const Header = ({ toggleNavBar, navBar }: HeaderTypes) => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile toggleNavBar={toggleNavBar} navBar={navBar} />
        </div>
    )
}

export default Header