import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import Login from '../componentes/Login';
import Logout from '../componentes/Logout';
import { matchPattern } from 'react-router/lib/PatternUtils';

function verificaAuth(nextState, replace) {

    const resultado = matchPattern('/timeline(/:login)', nextState.location.pathname);
    const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;

    if (enderecoPrivadoTimeline && localStorage.getItem('authToken') === null) {
        replace('/');
    }

}

export default function registerRoutes() {

    return (
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Login} />
                <Route path="/timeline(/:login)" component={App} onEnter={verificaAuth} />
                <Route path="/logout" component={Logout} />
            </Router>
        </div>
    );
}