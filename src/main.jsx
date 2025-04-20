import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PixabayState from './Context/PixabayState.jsx'

createRoot(document.getElementById('root')).render(
  <PixabayState>
    <App />
  </PixabayState>,
)
