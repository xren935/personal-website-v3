import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Scroll from './components/scroll';
import Stack from './components/stack';
import Project from './components/project';
import Notes from './components/notes';
import About from './components/about';

ReactDOM.render(
  <React.StrictMode>
    <Scroll />
    <Header />
    <Sidebar />
    <Stack />
    <Project />
    <Notes />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
