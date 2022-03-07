import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import FullButton from '../../components/Buttons/FullButton/FullButton'

const P404 = () => {
    const navigate = useNavigate()
    return (
        <MainLayout>
            <div className="page-main">
                <div className="w-50">
                    <p className="text-xl text-purple text-center mb-10">
                        Pareces un poco perdido...
                    </p>
                    <FullButton
                        name="Ir a inicio"
                        fun={() => navigate('/')}
                    />
                </div>
            </div>
        </MainLayout>
    )
}

export default P404
