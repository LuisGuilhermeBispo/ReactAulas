import React, { useState } from 'react';
// import { Redirect, Router } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import  AuthService  from '../../services/AuthService';

export default function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

    function handleLogin(event) {
      event.preventDefault()
        const credentials = { login: login, password: password }
        console.log(credentials);
        const response = AuthService.authenticate(credentials)
        response.then(res => {
          console.log(res.sucess);
          if(res.sucess) {
            window.location.href = "/admin";

          } else {
            alert("Login ou Senha Invalidos")
          }
        })
    }

    return(
        <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" value={login} onChange={event => setLogin(event.target.value)} name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" value={password} onChange={event => setPassword(event.target.value)} name="password" placeholder="password"/>
      <input type="submit" onClick={(e) => handleLogin(e)} className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="#">Esqueceu a Senha?</a>
    </div>

  </div>
</div>
        </div>
    )
}