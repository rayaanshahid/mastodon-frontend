import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebSocket from './components/websocket/websocket';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='websocket-header'>
    <h1>Live Mastodon Posts</h1>
    </div>
    <WebSocket />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
