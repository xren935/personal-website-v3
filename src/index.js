import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Scroll from './components/scroll';
import Main from './components/main';

ReactDOM.render(
  <React.StrictMode>
    <Scroll />
    <Header />
    <Sidebar />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
