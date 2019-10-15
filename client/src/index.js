import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import axios from 'axios';
axios.defaults.withCredentials = true;

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
// registerServiceWorker();
