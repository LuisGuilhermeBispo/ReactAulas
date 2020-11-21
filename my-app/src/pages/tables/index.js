import React from 'react';
import { Link } from 'react-router-dom';

import tableService from '../../services/TableService';
import  QrImage  from '../../assets/images/qrcode-icon.png';

class TablesComponent extends React.Component {

  
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
            let res = await tableService.getTables()
            this.setState({ posts: res })
        } catch (error) {
            console.log(error);
            alert("Não foi possível listar as mesas.")
        }
    }


    render() {

        return (
            <div>
                <h1 className="m-5">Mesas</h1>
                {this.state.posts.map(post => (
                    <Link to={"/cardapio/" + post.id} key={post.id}>
                        <div className="container">
                            <div className="wrapper">

                            <div className="post-card">
                                <div className="post-card__img">
                                    <h4>{post.name}</h4>
                                </div>
                                <div className="post-card__text">
                                    {/* <a href={post.qrCode} download> */}
                                    <img src={QrImage}/>
                                    {/* </a> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )
    }
}

export default TablesComponent;