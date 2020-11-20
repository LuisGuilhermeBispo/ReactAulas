import React from 'react';

export default function HeaderComponent(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/qrcode">QR CODE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <a className="navbar-brand" href="#">LOGIN</a>
                </span>
            </div>
        </nav>
    )
}