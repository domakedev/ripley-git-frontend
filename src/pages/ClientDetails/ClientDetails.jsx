import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAllClients } from '../../utils/db.services'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import ClientDataCard from '../../components/ClientDataCard/ClientDataCard'
import FullButton from '../../components/Buttons/FullButton/FullButton'

const ClientDetails = () => {
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [client, setClient] = useState({
        name: '',
        surname: '',
        born: '',
    })
    const { id } = useParams()
    if (!id) {
        return (
            <MainLayout>
                <div className="page-main">
                    <p>Primero elije un cliente</p>
                    <div className="w-60 mt-4">
                        <FullButton
                            type
                            name="Ver lista de clientes"
                            fun={() => navigate('/list-client')}
                        />
                    </div>
                </div>
            </MainLayout>
        )
    }

    useEffect(async () => {
        const data = await getAllClients()
        const clientFiltered = data.filter((c) => Number(c.id) === Number(id))
        if (clientFiltered.length === 0) {
            return
        }

        setClient(clientFiltered[0])
    }, [])

    return (
        <MainLayout>
            <div className="page-main">
                <ClientDataCard
                    born={client?.born}
                    name={client?.name}
                    surname={client?.surname}
                />
            </div>
        </MainLayout>
    )
}

export default ClientDetails
