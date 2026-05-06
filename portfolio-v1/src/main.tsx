import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './navbar.css'
import './hero.css'
import './aboutme.css'
import './experience.css'
import './contact.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
