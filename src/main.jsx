// what is the react ?
// react is core foundatation libaray for developed the ui interface with SPA
import React from 'react'
// what is reactDOM ?
// ReactDOM is a library. which is implementation on the web like react-native is implementation on moblie 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// ReactDOM create own Dom. whihc is called virtual dom

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// react and ReactDOM these 2 libarary which is used to mainpulate the web DOM