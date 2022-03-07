import React from 'react'
import AddClientForm from '../../components/Menu/AddClientForm/AddClientForm'
import MainLayout from '../../layouts/MainLayout/MainLayout'

const AddClient = () => (
    <MainLayout>
        <div className="page-main">
            <AddClientForm />
        </div>
    </MainLayout>
)

export default AddClient
