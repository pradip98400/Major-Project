import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();


