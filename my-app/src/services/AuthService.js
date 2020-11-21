const axios = require('axios')

const urlApi = 'http://localhost:3200/auth'
const AuthService = {

    async storeAuthData(data) {
        try {
            const stringData = JSON.stringify(data);
            console.log(data);
            localStorage.setItem("authData", stringData);
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro :(");
        }
    },

    async authenticate(data) {

        const params = {
            login: data.login,
            password: data.password
        }
        console.log(params);
        const response = await axios.post(`${urlApi}/authenticate`, params)
            .then(data => {
                return data
            }).catch(error => console.log(error))
        return response.data

    },

    getAuthData() {
        let authData = localStorage.getItem("authData");
        return authData != null ? JSON.parse(authData) : null;
    },

    logout() {
        localStorage.removeItem("authData");
    },

    async testData() {
        const response = axios.get('http://localhost:3200/listEmployee')
        console.log(response);
    }

};

export default AuthService;