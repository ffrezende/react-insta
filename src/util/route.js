import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import Login from '../componentes/Login';

export default function registerRoutes() {
    return (
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Login} />
                <Route path="/timeline" component={App} />
            </Router>
        </div>
    );
}