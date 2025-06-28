import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './assets/css/style.css'
import HomePage from './pages/home'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage />
  </StrictMode>,
)
