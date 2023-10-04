import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://fake-server-crud-react-redux.vercel.app'
})

export default clienteAxios