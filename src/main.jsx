import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove any existing styles
const existingStyles = document.querySelector('style');
if (existingStyles) {
  existingStyles.remove();
}

// Create a new style element
const style = document.createElement('style');
document.head.appendChild(style);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)