import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './App.jsx'
import './index.css'

// Import all project pages
import VistaTactileDisplay from './projects/VistaTactileDisplay'
import StereotacticNavigationSystem from './projects/StereotacticNavigationSystem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/vista-tactile-display" element={<VistaTactileDisplay />} />
        <Route path="/portfolio/stereotactic-navigation-system" element={<StereotacticNavigationSystem />} />
        {/* Catch-all route - redirect to portfolio */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)