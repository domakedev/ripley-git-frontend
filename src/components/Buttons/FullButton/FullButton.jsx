import React from 'react'
import PropTypes from 'prop-types'

import './FullButton.css'

const FullButton = ({ type, name, fun }) => {
    const onClickHandler = (e) => {
        e.preventDefault()
        fun()
    }
    return (
        <button
            type={type ? 'button' : 'submit'}
            onClick={onClickHandler}
            className="button_full"
        >
            {name}
        </button>
    )
}

FullButton.propTypes = {
    type: PropTypes.bool,
    name: PropTypes.string.isRequired,
    fun: PropTypes.func,
}

FullButton.defaultProps = {
    type: false,
    fun: () => {},
}

export default FullButton
