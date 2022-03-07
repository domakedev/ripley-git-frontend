import React, { useEffect, useState } from 'react'
import MarketAge from '../../components/MarketAge/MarketAge'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { getClientsAVGAGE } from '../../utils/db.services'

const Market = () => {
    const [age, setAge] = useState('0')
    useEffect(async () => {
        const respuesta = await getClientsAVGAGE()
        setAge(respuesta.avgAge)
    }, [])

    return (
        <MainLayout>
            <div className="page-main">
                <MarketAge avgAge={age} />
            </div>
        </MainLayout>
    )
}

export default Market
