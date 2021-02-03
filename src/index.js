import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Popup from './components/popup';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Scroll from './components/scroll';
import Stack from './components/stack';
import Project from './components/project';
import Notes from './components/notes';
import About from './components/about';
import Contact from './components/contact';

ReactDOM.render(
  <React.StrictMode>
    <Popup />
    <Scroll />
    <Header />
    <Sidebar />
    <Stack />
    <Project />
    <Notes />
    <About />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
