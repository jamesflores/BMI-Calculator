import React from 'react'
//import ReactDOM from 'react-dom/client.js'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import BMIApp from './BMIApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BMIApp />
  </React.StrictMode>,
)
*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BMIApp />
  </React.StrictMode>
);