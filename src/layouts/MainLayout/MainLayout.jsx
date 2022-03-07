import React from 'react'
import PropTypes from 'prop-types'
import './MainLayout.css'

// Components
import Menu from '../../components/Menu/Menu'

// eslint-disable-next-line arrow-body-style
const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Menu />
            {children}
            <div />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.element,
}

MainLayout.defaultProps = {
    children: ':)',
}
export default MainLayout
