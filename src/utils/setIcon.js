/* eslint-disable no-unused-vars */
import HomeIconWhite from '../assets/icons/white/home.svg'
import HomeIconBlack from '../assets/icons/black/home.svg'

import AddClientIconWhite from '../assets/icons/white/addClient.svg'
import AddClientIconBlack from '../assets/icons/black/addClient.svg'

import ClientListIconWhite from '../assets/icons/white/clientList.svg'
import ClientListIconBlack from '../assets/icons/black/clientList.svg'

import ClientDetailsIconWhite from '../assets/icons/white/clientDetails.svg'
import ClientDetailsIconBlack from '../assets/icons/black/clientDetails.svg'

import MarketIconWhite from '../assets/icons/white/market.svg'
import MarketIconBlack from '../assets/icons/black/market.svg'

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
const clientListIconHandler = (active) => {
    if (active) {
        return ClientListIconBlack
    }
    return ClientListIconWhite
}
const clientDetailsIconHandler = (active) => {
    if (active) {
        return ClientDetailsIconBlack
    }
    return ClientDetailsIconWhite
}
const marketIconHandler = (active) => {
    if (active) {
        return MarketIconBlack
    }
    return MarketIconWhite
}

export {
    WelcomeIconHandler,
    addClientIconHandler,
    clientListIconHandler,
    clientDetailsIconHandler,
    marketIconHandler,
}
