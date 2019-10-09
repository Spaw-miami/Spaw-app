import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
import Calendar from 'react-calendar'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
    {/* <Calendar/> */}
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
