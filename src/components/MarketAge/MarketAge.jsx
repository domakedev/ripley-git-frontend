import React from 'react'
import PropTypes from 'prop-types'

const MarketAge = ({ avgAge }) => (
    <div className="small-card">
        <p className="mt-[57px] text-2xl font-bold text-purple text-center">
            {avgAge} años
        </p>
        <p className="mt-[22px] text-purple text-center">
            Edad promedio de tus clientes
        </p>
    </div>
)

MarketAge.propTypes = {
    avgAge: PropTypes.string.isRequired,
}

export default MarketAge
