import React from 'react'
import PropTypes from 'prop-types'

const ErrorInput = ({ text }) => (
    <div className="w-full bg-red-500 text-red-100 my-5 p-1 rounded-full text-center text-sm">
        {' '}
        {text}
    </div>
)

ErrorInput.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ErrorInput
