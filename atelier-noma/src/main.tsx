import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { prefersReducedMotion } from './lib/motion'
import './styles/index.css'

// Elementos com data-reveal só começam ocultos quando há animação disponível.
if (!prefersReducedMotion()) document.documentElement.classList.add('js-motion')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
