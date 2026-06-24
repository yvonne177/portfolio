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
import HandTrackingAssistance from './projects/HandTrackingAssistance.jsx'
import MicrochannelHeatSinks from './projects/MicrochannelHeatSinks.jsx'
import DesktopCNCDesign from './projects/DesktopCNCDesign.jsx'
import OffsetGearboxDesign from './projects/OffsetGearboxDesign.jsx'
import OscilloscopePCBDesign from './projects/OscilloscopePCBDesign.jsx'

// import WindowCableTensioner from './projects/WindowCableTensioner.jsx'
// import CastorWheelAssemblyLine from './projects/CastorWheelAssemblyLine.jsx'

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
        <Route path="/portfolio/hand-tracking-assistance" element={<HandTrackingAssistance />} />
        <Route path="/portfolio/microchannel-heat-sinks" element={<MicrochannelHeatSinks />} />
        <Route path="/portfolio/desktop-cnc-design" element={<DesktopCNCDesign />} />
        <Route path="/portfolio/offset-gearbox-design" element={<OffsetGearboxDesign />} />
        <Route path="/portfolio/oscilloscope-pcb-design" element={<OscilloscopePCBDesign />} />

        {/*

        <Route path="/portfolio/window-cable-tensioner" element={<WindowCableTensioner />} />
        <Route path="/portfolio/castor-wheel-assembly-line" element={<CastorWheelAssemblyLine />} /> */}
                {/* Catch-all route - redirect to portfolio */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)