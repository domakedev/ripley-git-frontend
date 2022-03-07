/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    BlueContainer,
    LogoContainer,
    MenuContainer,
    LogoImage,
} from './styled'

import { WelcomeIconHandler, addClientIconHandler } from '../../utils/setIcon'
import RipleyLogo from '../../assets/images/ripley-logo.svg'

const Menu = function Menu() {
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)

    const setIconStyles = (isActive, fun) => {
        return {
            minWidth: '46px',
            minHeight: '46px',
            backgroundColor: isActive ? '#fff' : null,
            boxShadow: isActive ? '4px 4px 8px rgba(0, 0, 0, 0.2)' : '',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px 0px 24px 0px',
            backgroundImage: `url(${fun(isActive)})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
    }

    const openTheMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <MenuContainer menuOpen={openMenu}>
            <BlueContainer>
                <LogoContainer onClick={openTheMenu}>
                    {/* For accessibility is important don't assign a click event in non-interactive elementos like img */}
                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                    <LogoImage src={RipleyLogo} alt="ripley" />
                </LogoContainer>

                <NavLink
                    style={({ isActive }) =>
                        setIconStyles(isActive, WelcomeIconHandler)
                    }
                    to="/"
                />
                <NavLink
                    style={({ isActive }) =>
                        setIconStyles(isActive, addClientIconHandler)
                    }
                    to="edit-profile"
                />
            </BlueContainer>
        </MenuContainer>
    )
}

export default Menu
