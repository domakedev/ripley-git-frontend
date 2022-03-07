/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome/Welcome'
import AddClient from './pages/AddClient/AddClient'
import ListClient from './pages/ListClient/ListClient'
import ClientDetails from './pages/ClientDetails/ClientDetails'
import Market from './pages/Market/Market'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/add-client" element={<AddClient />} />
                <Route path="/list-client" element={<ListClient />} />
                <Route path="/client-details" element={<ClientDetails />} />
                <Route path="/client-details/:id" element={<ClientDetails />} />
                <Route path="/market" element={<Market />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
