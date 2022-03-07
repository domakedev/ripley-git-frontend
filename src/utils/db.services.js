import clienteAxios from './axios'

const getAllClients = async () => {
    try {
        const respuesta = await clienteAxios.get('/api/clients/')
        return respuesta.data
    } catch (error) {
        return error.response.data.message
    }
}

const getClientsAVGAGE = async () => {
    try {
        const respuesta = await clienteAxios.get('/api/clients/avg')
        return respuesta.data
    } catch (error) {
        return error.response.data.message
    }
}

// eslint-disable-next-line import/prefer-default-export
export { getAllClients, getClientsAVGAGE }
