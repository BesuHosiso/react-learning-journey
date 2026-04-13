import React from 'react'
import { useState } from 'react'
import './index.css'
import ProjectState from './components/projectState.jsx'
import Navbar from './components/Navbar.jsx'
import InputState from './components/projectState2.jsx'
import Pricing from './components/pricing.jsx'
import UseEffect from './components/useEffect.jsx'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [liveType, setLiveType] = useState("Type Something there...↑");

  return (
   <div className={isDarkMode ? 'bg-gray-800 text-white w-full min-h-screen' : 'bg-gray-200 text-gray-900 w-full min-h-screen'}>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <InputState isDarkMode={isDarkMode} setLiveType={setLiveType}/>
    <ProjectState isDarkMode={isDarkMode} liveType={liveType}/>
    <Pricing />
    <UseEffect />
   </div>
  )
}

export default App;