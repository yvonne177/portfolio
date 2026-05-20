import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './App.jsx'
import './index.css'

// Import all project pages
import VistaTactileDisplay from './projects/VistaTactileDisplay'
import AutonomousRover from './projects/AutonomousRover.jsx'
import CapstoneTailgate from './projects/CapstoneTailgate.jsx'
import ComputerIntegratedSurgery from './projects/ComputerIntegratedSurgery.jsx'
import UR5eControls from './projects/UR5eControls.jsx'
import UR5ManipulationFoundations from './projects/UR5ManipulationFoundations.jsx'
import HapticsTeleoperation from './projects/HapticsTeleoperation.jsx'
import RobotLocalizationProject from './projects/RobotLocalizationFoundations.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/vista-tactile-display" element={<VistaTactileDisplay />} />
        <Route path="/portfolio/autonomous-rover" element={<AutonomousRover />} />
        <Route path="/portfolio/capstone-tailgate" element={<CapstoneTailgate />} />
        <Route path="/portfolio/computer-integrated-surgery" element={<ComputerIntegratedSurgery/>} />
        <Route path="/portfolio/ur5e-controls" element={<UR5eControls/>} />
        <Route path="portfolio/ur5-manipulation" element={<UR5ManipulationFoundations/>} />
        <Route path="/portfolio/hapkit" element={<HapticsTeleoperation/>} />
        <Route path="/portfolio/robot-localization" element={<RobotLocalizationProject/>} />
        {/* Catch-all route - redirect to portfolio */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)