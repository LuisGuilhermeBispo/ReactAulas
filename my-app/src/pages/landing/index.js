import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';



export default function Welcome(){
return(
    <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 data-aos="fade-right" className="display-3">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div data-aos="fade-left" className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">Hello World!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum pulvinar metus, sit amet gravida diam mattis vitae. Nunc venenatis condimentum nunc. </p>
                </div>
                <div className="col-4 text-center">
                    <p>Olá Mundo Olá Mundo</p>
                </div>
                <div className="col-4 text-center">
                    <p>Olá Mundo Olá Mundo</p>
                </div>
                <div className="col-4 text-center">
                    <p>Olá Mundo Olá Mundo</p>
                </div>
                
            </div>
        </div>
        <div data-aos="fade-up" className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">Hello World!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum pulvinar metus, sit amet gravida diam mattis vitae. Nunc venenatis condimentum nunc. </p>
                </div>
                <div className="container">

                    <p>Olá Mundo Olá Mundo</p> 
                </div>     
            </div>
        </div>
    </div>
)}