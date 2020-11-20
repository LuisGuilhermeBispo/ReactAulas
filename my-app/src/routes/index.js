import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, QrCodeComponent, Login } from '../pages';

export default function Routes(){

    useEffect(() => {
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/admin" exact component={QrCodeComponent}/>
                {/* <Route path="/qrcode" exact component={QrCode}/> */}

            </Switch>
        </BrowserRouter>
    );
}