/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import FullButton from '../../Buttons/FullButton/FullButton'
import BasicInput from '../../Inputs/BasicInput/BasicInput'
import ErrorInput from '../../Errors/ErrorInput/ErrorInput'
import Message from '../../Message/Message'
import clienteAxios from '../../../utils/axios'

const AddClientForm = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [born, setBorn] = useState('')
    const [errorForm, setErrorForm] = useState()
    const [message, setMessage] = useState('Completa los datos')

    const cleanError = () => {
        setTimeout(() => {
            setErrorForm('')
        }, 3000)
    }

    const cleanMessage = () => {
        setTimeout(() => {
            setMessage('Completa los datos')
        }, 3000)
    }

    const createClient = async () => {
        if (name === '' || surname === '' || born === '') {
            setErrorForm('No dejes campos vacios')
            cleanError()
            return
        }

        const data = {
            name,
            surname,
            born,
        }

        try {
            await clienteAxios.post('/api/clients', data)

            // TODO: Añadir respuesta a Redux

            // Mostrar aviso de que se creo usuario
            setMessage('Se creó el usuario')
            cleanMessage()
            setName('')
            setSurname('')
            setBorn('')
        } catch (error) {
            setErrorForm(error.response.data.message)
            cleanError()
        }
    }

    return (
        <form className="small-card">
            <BasicInput
                id="name"
                label="Nombre"
                placeHolder="César"
                fun={setName}
                value={name}
            />
            <BasicInput
                id="surname"
                label="Apellido"
                placeHolder="Guevara Cabrera"
                fun={setSurname}
                value={surname}
            />
            <BasicInput
                id="born"
                label="Fecha de nacimiento"
                type="date"
                fun={setBorn}
                value={born}
            />

            {errorForm ? (
                <ErrorInput text={errorForm} />
            ) : (
                <Message text={message} />
            )}

            <FullButton name="Añadir cliente" fun={createClient} />
        </form>
    )
}

export default AddClientForm
