import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthService } from '../services';

import { Landing, Admin, Login } from '../pages';

export default function Routes(){

    useEffect(() => {
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/admin" exact component={Admin}/>
            </Switch>
        </BrowserRouter>
    );
}