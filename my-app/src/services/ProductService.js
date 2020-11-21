import axios from 'axios';

// Armazenando o endereço da API
const apiUrl = "http://localhost:3200"

const ProductService = {

    async getProducts() {
        const res = await axios.get(apiUrl + '/product/listAllProduct')
        console.log(res.data);
        return res.data
    },
    async createProduct(params) {
        const res = await axios.post(apiUrl + '/products/createProduct', params)
        return res
    },
    async getProduct(id) {
        const res = await axios.get(apiUrl + '/product/findProduct/' + id)
        console.log(res.data);
        return res.data.data
    }
}

export default ProductService;