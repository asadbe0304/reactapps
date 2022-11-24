import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Header.jsx';
import Main from './components/Main';
import Feed from "./components/Feedback"
import Rec from "./components/Recomended"
import Bar from "./components/Aside"
import Fot from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
    <Main/>
    <Feed/>
    <Rec/>
    <Bar/>
    <Fot/>
  </React.StrictMode>
);

