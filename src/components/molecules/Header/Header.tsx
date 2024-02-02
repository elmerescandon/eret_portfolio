import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

type HeaderTypes = {
    toggleNavBar: () => void;
}

const Header = ({ toggleNavBar }: HeaderTypes) => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile toggleNavBar={toggleNavBar} />
        </div>
    )
}

export default Header