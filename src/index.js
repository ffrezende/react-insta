import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import registerRoutes from './util/route';

ReactDOM.render((registerRoutes()), document.getElementById('root'));
