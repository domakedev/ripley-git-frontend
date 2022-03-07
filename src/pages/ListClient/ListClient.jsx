import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import ShowMoreClient from '../../components/ShowMoreClient/ShowMoreClient'
import { getAllClients } from '../../utils/db.services'
import './ListClient.css'

const ListClient = () => {
    const [clients, setClients] = useState([])

    useEffect(async () => {
        const data = await getAllClients()
        setClients(data)
    }, [])

    return (
        <MainLayout>
            <div className="page-main page-main_list-client">
                {clients?.map((client) => (
                    <ShowMoreClient
                        key={client.id}
                        name={client.name}
                        id={client.id}
                    />
                ))}
            </div>
        </MainLayout>
    )
}

export default ListClient
