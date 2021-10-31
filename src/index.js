import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Divider from './components/divider/Divider';
import Knowledge from './components/knowledge/Knowledge';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <About />
    {/*<Divider isDown = {true} />*/}
    <Knowledge />
    {/*<Divider color = '#F6F6F6' />*/}
    <Project />
    {/*<Divider isDown = {true} />*/}
    <Contact />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
