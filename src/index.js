import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './component/Main';
import Feed from "./component/Feedback"
import Rec from "./component/Recomended"
import Bar from "./component/Aside"
import Fot from "./component/Footer"

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

