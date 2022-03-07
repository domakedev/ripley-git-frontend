import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import FullButton from '../Buttons/FullButton/FullButton'

const ShowMoreClient = ({ name, id }) => {
    const navigate = useNavigate()

    return (
        <div className="small-card">
            <p className="text-sm text-purple">Cliente #{id}</p>
            <p className="mt-6 mb-6 text-lg text-purple">
                {name.toUpperCase()}
            </p>
            <FullButton
                type
                name="Ver detalles"
                fun={() => navigate(`/client-details/${id}`)}
            />
        </div>
    )
}

ShowMoreClient.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default ShowMoreClient
