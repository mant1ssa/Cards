import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';
import AppHeader from "./components/app-header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
