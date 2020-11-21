import React from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../../services/ProductService';

class TableComponent extends React.Component {

  
    constructor(props) {
        super(props)
        this.state = {
            // Atributo para armazenar o array de posts vindos da API.
            posts: [],
        }
    }

    // Função que é executada assim que o componente carrega.
    componentDidMount() {
        this.loadPosts()
    }

    // Função responsável por chamar o serviço e carregar os posts.
    async loadPosts() {
        try {
            let res = await ProductService.getProducts()
            this.setState({ posts: res })
            console.log(res);
        } catch (error) {
            console.log(error);
            alert("Não foi possível listar os produtos.")
        }
    }


    render() {

        return (
            <div>
                <div className="container">

                <h1 className="m-5">Cardápio</h1>
                
                <table className="table-product">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>

                {this.state.posts.map(post => (
                    <Link to={"/produto/" + post.id} key={post.id}>
                        <tr >
                                <td className="my-2 d-block">
                                    <h4>{post.name}</h4>
                                </td>
                                <td className="my-2 d-block">
                                    <span>{post.descricao}</span>
                                </td>
                                <td className="my-2 d-block">
                                    <span>{post.valor}</span>
                                </td>
                        </tr>

                    
                    </Link>
                ))}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default TableComponent;