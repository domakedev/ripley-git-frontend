import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text }) => (
    <div className="w-full bg-violet-200 text-violet-800 my-5 p-1 rounded-md text-center text-sm">
        {' '}
        {text}
    </div>
)

Message.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Message
