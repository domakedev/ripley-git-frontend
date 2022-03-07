import React from 'react'
import PropTypes from 'prop-types'
import dateToAge from '../../utils/age'

const ClientDataCard = ({ born, name, surname }) => (
    <div className="small-card text-purple">
        <p className="text-xs text-right">{born}</p>
        <p className="font-bold text-2xl">{name.toUpperCase()}</p>
        <p className="text-lg">{surname.toUpperCase()}</p>
        <p className="text-right text-2xl">
            <strong>{born ? dateToAge(born) : null}</strong>{' '}
            {born ? 'años' : 'Sin datos'}
        </p>
    </div>
)

ClientDataCard.propTypes = {
    born: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
}

export default ClientDataCard
