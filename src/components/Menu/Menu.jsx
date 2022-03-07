/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    BlueContainer,
    LogoContainer,
    MenuContainer,
    SimpleText,
    LogoImage,
    NavIcon,
    LastNavIcon,
    SimpleTextLogout,
} from './styled'

import HomeIconWhite from '../../assets/icons/white/home.svg'
import HomeIconBlack from '../../assets/icons/black/home.svg'

import AddClientIconWhite from '../../assets/icons/white/addClient.svg'
import AddClientIconBlack from '../../assets/icons/black/addClient.svg'

import ClientListIconWhite from '../../assets/icons/white/clientList.svg'
import ClientListIconBlack from '../../assets/icons/black/clientList.svg'

import ClientDetailsIconWhite from '../../assets/icons/white/clientDetails.svg'
import ClientDetailsIconBlack from '../../assets/icons/black/clientDetails.svg'

import MarketIconWhite from '../../assets/icons/white/market.svg'
import MarketIconBlack from '../../assets/icons/black/market.svg'

import RipleyLogo from '../../assets/images/ripley-logo.svg'

const Menu = function Menu() {
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(false)
    const WelcomeIconHandler = (active) => {
        if (active) {
            return HomeIconBlack
        }
        return HomeIconWhite
    }
    const addClientIconHandler = (active) => {
        if (active) {
            return AddClientIconBlack
        }
        return AddClientIconWhite
    }

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
                <LogoContainer>
                    {/* For accessibility is important don't assign a click event in non-interactive elementos like img */}
                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                    <LogoImage
                        src={RipleyLogo}
                        alt="aictive"
                        onClick={openTheMenu}
                        onKeyDown={openTheMenu}
                    />
                </LogoContainer>

                <NavLink
                    style={({ isActive }) =>
                        setIconStyles(isActive, WelcomeIconHandler)
                    }
                    to="welcome"
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
