import { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Logout extends Component {

    componentWillMount() {
        localStorage.removeItem('authToken');
        browserHistory.push('/');
    }

    render() {
        return null;
    }
}