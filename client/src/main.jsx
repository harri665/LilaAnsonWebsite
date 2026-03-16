import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const runtimeBase =
  window.__APP_BASE_PATH__ ||
  (window.location.pathname.startsWith('/LilaAnsonWebsite/') ? '/LilaAnsonWebsite' : '/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={runtimeBase === '/' ? undefined : runtimeBase}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
