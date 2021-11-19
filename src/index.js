import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Knowledge from './components/knowledge/Knowledge';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Knowledge />
    <Project />
    <Contact />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
