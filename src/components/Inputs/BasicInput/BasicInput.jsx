/* eslint-disable arrow-body-style */
import React from 'react'
import PropTypes from 'prop-types'
import './BasicInput.css'

const BasicInput = ({ id, label, placeHolder, type, fun, value }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeHolder}
                onChange={(e) => {
                    fun(e.target.value)
                }}
                value={value}
            />
        </div>
    )
}

BasicInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    type: PropTypes.string,
    fun: PropTypes.func,
    value: PropTypes.string.isRequired
}

BasicInput.defaultProps = {
    label: '',
    placeHolder: '',
    type: 'text',
    fun: () => {},
}

export default BasicInput
