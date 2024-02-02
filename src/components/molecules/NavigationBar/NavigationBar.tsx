import React from 'react'
import NavigationBarMobile from './NavigationBarMobile'

type NavigationBarTypes = {
    navBar: boolean;
    setNavBar: (navBar: boolean) => void;
}

const NavigationBar = ({ navBar, setNavBar }: NavigationBarTypes) => {

    const handleCloseMenu = () => {
        setNavBar(false);
    }

    return (
        <div>
            <NavigationBarMobile isOpen={navBar} onClose={handleCloseMenu} />
        </div>
    )
}

export default NavigationBar