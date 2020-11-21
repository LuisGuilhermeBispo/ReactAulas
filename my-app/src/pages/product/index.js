import React from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../../services/ProductService';

class Product extends React.Component {

  
    constructor(props) {
        super(props)
        this.state = {
            // Atributo para armazenar o array de posts vindos da API.
            post:{},
        }
    }

    // Função que é executada assim que o componente carrega.
    componentDidMount() {
        let postId = this.props.match.params.id
        console.log(postId);
        this.loadPost(postId)
    }

    // Função responsável por chamar o serviço e carregar os posts.
    async loadPost(id) {
        try {
            let res = await ProductService.getProduct(id)
            console.log(res);
            this.setState({ post: res[0] })
            console.log(this.state);
        } catch (error) {
            console.log(error);
            alert("Não foi possível listar o produto.")
        }
    }


    render() {

        return (
            <div>
                <h1 className="m-5">Produto</h1>
                
                <div className="container">
                    <div className="post-card">
                        <div className="post-card__img">
                            <h4>{this.state.post.name}</h4>
                        </div>
                        <div className="post-card__text">
                            <div className="flex my-3">
                            <span className="mx-5">{this.state.post.descricao}</span>
                            <span>{this.state.post.valor}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;