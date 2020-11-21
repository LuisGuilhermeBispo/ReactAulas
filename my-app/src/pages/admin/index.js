import React from 'react';
import ProductService from '../../services/ProductService';

import qrCodeService from '../../services/QrCodeService';
import TableService from '../../services/TableService';

class QrCodeComponent extends React.Component {

    product
    descricao
    valor
    table

    constructor(props) {
        super(props)
        this.state = {
            product: {
                id: null,
                name : '',
                descricao : '',
                valor : ''
            },
            table: {
                name: ''
            }
        }

    }

    componentDidMount() {
        // this.loadTeste()
    }

    async loadTeste(){
        try {
            let container = document.getElementById('qrcontainer')
            let res = await qrCodeService.testData(1)
            
            let html = `<a href="${res.data}" download><img src="${res.data}"></a>`
            container.innerHTML = html
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    saveTable() {
        const params = {
            name: this.state.table.name
        }
        TableService.createTable(params)

    }
    
    saveProduct() {
        const params = {
            name: this.state.product.name,
            descricao: this.state.product.descricao,
            valor: this.state.product.valor
        }
        ProductService.createProduct(params)
    }

    render() {

        return (
            <div>
                <div className="container">
                <h1>Admin Page</h1>
                    <div className="flex">
                        <div className="left">
                            <h3>Adicionar mesa</h3>
                            <form>
                                <input type="text" id="table" placeholder="Nome da Mesa" onChange={e => this.setState({ table: {name: e.target.value} })} value={this.state.table.name} name="table"/>
                                <button type="submit" onClick={this.saveTable()}>Salvar</button>
                            </form>
                            
                        </div>
                        <div className="right">
                            <h3>Adicionar Produto</h3>
                            <form>
                                <input type="text" id="product" onChange={e => this.setState({ product: {name: e.target.value} })} value={this.state.product.name} placeholder="Nome do produto" name="product"/>
                                <input type="text" id="descricao" onChange={e => this.setState({ product: {descricao: e.target.value} })} value={this.state.product.descricao} placeholder="Descricao" name="descricao"/>
                                <input type="text" id="valor" onChange={e => this.setState({ product: {valor: e.target.value} })} value={this.state.product.valor} placeholder="Valor" name="valor"/>
                                <button type="submit" onClick={this.saveProduct()}>Salvar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QrCodeComponent;