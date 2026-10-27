import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

history.scrollRestoration = 'manual'

const preloader = document.getElementById('preloader')
const hidePreloader = () => {
  setTimeout(() => {
    preloader?.classList.add('hide')
    setTimeout(() => preloader?.remove(), 700)
  }, 800)
}

if (document.readyState === 'complete') hidePreloader()
else window.addEventListener('load', hidePreloader)