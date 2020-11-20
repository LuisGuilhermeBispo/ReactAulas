import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import  GlobalImage  from '../../assets/images/globe-connection.png';
import  SocialImage from '../../assets/images/social.png';
import  AgilImage from '../../assets/images/agil.png';
import  BeatsImage from '../../assets/images/beats-comprimido.png';
import  McImage from '../../assets/images/mcdonalds.png';
import  PespiImage from '../../assets/images/pepsi.png';


export default function Welcome(){
return(
    <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container textBanner">
                <h1 data-aos="fade-right" className="display-3">QR Dinner</h1>
                <p className="lead">Nos tempos do Coronavirus, temos que mudar alguns hábitos, mesmo quando se trata de restaurantes. Diga adeus aos cardápios físicos e dê as boas-vindas aos QR Codes!</p>
            </div>
        </div>
        <div data-aos="fade-top" className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="title">Uma nova maneira de pedir!</h3>
                    <p>A pandemia do coronavírus (COVID-19) se espalhou pelo mundo e levará algum tempo até que uma cura esteja disponível para todos. Já está claro que o coronavirus pode se espalhar através do contato com superfícies contaminadas. Este é um problema sério para empresas como restaurantes, pois as pessoas tocam grande parte das superfícies todos os dias. Limpar e desinfetar mesas e balcões é um bom começo, mas ainda há mais uma coisa que seus clientes devem usar com segurança: o cardápio. Como evitar que os clientes compartilhem o mesmo cardápio físico? A resposta é muito simples. Troque seu cardápio por um QR Code!</p>
                </div>
                <div data-aos="fade-left" className="col-md-4 col-sm-12 text-center">
                    <img src={GlobalImage} alt='Logo da aplicação'width="30%"/>
                    <p className="subImage">Imersão com a Tecnologia</p>
                </div>
                <div data-aos="fade-top" className="col-md-4 col-sm-12 text-center">
                    <img src={SocialImage} alt='Logo da aplicação'width="30%"/>
                    <p className="subImage">Distanciamento Social</p>
                </div>
                <div data-aos="fade-right" className="col-md-4 col-sm-12 text-center">
                    <img src={AgilImage} alt='Logo da aplicação'width="30%"/>
                    <p className="subImage">Tempo e Produtividade</p>
                </div>
                
            </div>
        </div>
        <div data-aos="fade-down" className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="title">Entenda como funciona:</h3>
                    <p>Entenda como que nossos parceiros usam e crescem cada vez mais durante esse novo modo de viver e socializar.</p>
                    <p><strong> Veja os Benefícios: </strong></p>
                    <ul>
                        <li><p>Os cardápios passam de mão em mão e acabam ficando sujos de bebidas e molhos, o que causa o desperdício de cardápios de papel.</p></li>
                        <li><p>Com certeza você já disse ao seu cliente "Sinto muito, mas não temos mais essa opção", não é verdade? Sabemos que é demorado e caro manter um cardápio atualizado. </p></li>
                        <li><p>Muitos restaurantes não incluem imagens nos cardápios porque é caro fotos imagens de alta qualidade em papel. </p></li>
                        <li><p>Cuide não apenas da saúde dos seus clientes. Seus funcionários também são expostos ao risco de infecção durante o serviço. </p></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="title"> Veja os Parceiros: </h3>
                </div>
                <div className="col-md-4 col-sm-12 marcas">
                    <img src={McImage} alt='Logo da aplicação' width="30%"/>
                </div>

                <div className="col-md-4 col-sm-12 marcas"> 
                    <img src={BeatsImage} alt='Logo da aplicação' width="30%"/>
                </div>

                <div className="col-md-4 col-sm-12 marcas"> 
                    <img src={PespiImage} alt='Logo da aplicação' width="30%" />
                </div>
            </div>
        </div>   
    </div>
)}