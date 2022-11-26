import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Header/Header';
import Main from './components/Main/Main';
import Feed from "./components/Main/Feedback"
import Rec from "./components/Main/Recomended"
import Bar from "./components/Main/Aside"
import Fot from "./components/Footer/Footer"

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

