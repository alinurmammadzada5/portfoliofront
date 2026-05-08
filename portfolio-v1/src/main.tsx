import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/navbar.css'
import './css/hero.css'
import './css/aboutme.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
