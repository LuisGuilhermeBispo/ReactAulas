const axios = require('axios')
const AuthService = {

    async storeAuthData(data) {
        try {
            const stringData = JSON.stringify(data);
            localStorage.setItem("authData", stringData);
        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro :(");
        }
    },

    getAuthData() {
        let authData = localStorage.getItem("authData");
        return authData != null ? JSON.parse(authData) : null;
    },

    logout() {
        localStorage.removeItem("authData");
    },

    async testData() {
        const response = axios.get('http://localhost:3000/listEmployee')
        console.log(response);
    }

};

export default AuthService;