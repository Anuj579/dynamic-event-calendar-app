import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CalendarProvider } from './contexts/CalendarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarProvider>
      <App />
    </CalendarProvider>
  </StrictMode>,
)
