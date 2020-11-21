import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Landing, QrCodeComponent, Login } from '../pages';
import TableComponent from '../pages/table';
import ProductComponent from '../pages/product';
import TablesComponent from '../pages/tables';

export default function Routes(){

    useEffect(() => {
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/admin" exact component={QrCodeComponent}/>
                <Route path="/tables" exact component={TablesComponent}/>
                <Route path="/cardapio/:id" exact component={TableComponent}/>
                <Route path="/produto/:id" exact component={ProductComponent}/>
                {/* <Route path="/qrcode" exact component={QrCode}/> */}

            </Switch>
        </BrowserRouter>
    );
}