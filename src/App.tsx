import { useState } from 'react'
import './App.css'
import './App.scss'
import ButtonDemo from './pages/ButtonDemo'
import CheckBox from './components/Inputs/CheckBox'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle">
        <CheckBox label='Dark mode' checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)}/>
      </div>
      <ButtonDemo />
    </div>
  )
}

export default App
