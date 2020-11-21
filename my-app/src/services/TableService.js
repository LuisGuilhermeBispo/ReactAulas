import axios from 'axios';

// Armazenando o endereço da API
const apiUrl = "http://localhost:3200"

const TableService = {

    async getTables() {
        const res = await axios.get(apiUrl + '/table')
        console.log(res.data);
        return res.data
    },

    async createTable(params) {
        const res = await axios.post(apiUrl + '/table/createTable,', params)
        console.log(res);
        return res
    }

}

export default TableService;