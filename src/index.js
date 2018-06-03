import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'font-awesome/css/font-awesome.css'
import Myroutes from './Myroutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Myroutes />, document.getElementById('root'));
registerServiceWorker();
