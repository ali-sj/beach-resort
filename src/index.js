import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Roomcontextprovider from './context/RoomContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
<Provider store={store}>
      <Router>
      <App/>
  </Router>
</Provider>


  

,
  document.getElementById('root')
);



