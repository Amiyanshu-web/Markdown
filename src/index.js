import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// React Dom use virtual instancing for improving the performance
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
