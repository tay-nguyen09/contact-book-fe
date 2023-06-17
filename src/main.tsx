import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
