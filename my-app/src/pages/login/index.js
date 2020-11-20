import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthService } from '../../services';

export default function Login(){

  const [loginUsuario, setLoginUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const handleLogin = () => {
        const credentials = { loginUsuario, senhaUsuario }
        AuthService.storeAuthData(credentials)
    }

    return(
        <div>
            <div className="wrapper fadeInDown">
  <div id="formContent">

    <div className="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" value={loginUsuario} onChange={event => setLoginUsuario(event.target.value)} name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" value={senhaUsuario} onChange={event => setSenhaUsuario(event.target.value)} name="login" placeholder="password"/>
      <input type="submit" onClick={() => handleLogin()} className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="#">Esqueceu a Senha?</a>
    </div>

  </div>
</div>
        </div>
    )
}