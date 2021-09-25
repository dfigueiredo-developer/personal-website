import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Divider from './components/divider/Divider';
import Knowledge from './components/knowledge/Knowledge';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Divider isDown = {true} />
    <Knowledge />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
