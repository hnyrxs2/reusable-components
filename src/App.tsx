import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './App.scss';
import ToggleSwitch from './components/Inputs/ToggleSwitch';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setTheme, type ThemeTypes } from './store/uiSlice';
import SidePanel from './components/Containers/SidePanel';
import DemoPage from './pages/DemoPage';

function App() {
  const dispatch = useAppDispatch();

  const setCurrentTheme = (isDark: boolean) => {
    const theme: ThemeTypes = isDark ? 'dark' : 'light';
    dispatch(setTheme(theme));
  };

  const currentTheme = useAppSelector((state) => state.ui.theme.type);
  const isDarkMode = currentTheme === 'dark';

  return (
    <BrowserRouter>
      <div className={`app-container ${currentTheme}`}>
        <SidePanel />
        <div id="app-body">
          <div className="theme-toggle">
            <ToggleSwitch
              label="Dark mode"
              checked={isDarkMode}
              onChange={(e) => setCurrentTheme(e.target.checked)}
            />
          </div>
          <DemoPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
