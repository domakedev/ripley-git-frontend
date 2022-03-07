import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import './Welcome.css'

const Welcome = () => (
    <MainLayout>
        <div className="page-main">
            <h1 className="welcome-gretting">
                ¡Hola <strong> Admin!</strong>
            </h1>
            <p className="welcome-description">
                Añade y ve a tus cliente, todo en un mismo lugar.
            </p>
        </div>
    </MainLayout>
)

export default Welcome
