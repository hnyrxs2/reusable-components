import './App.css';
import './App.scss';
import ButtonDemo from './pages/ButtonDemo';
import CheckBox from './components/Inputs/CheckBox';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setTheme, type ThemeTypes } from './store/uiSlice';

function App() {
  const dispatch = useAppDispatch();

  const setCurrentTheme = (isDark: boolean) => {
    const theme: ThemeTypes = isDark ? 'dark' : 'light';
    dispatch(setTheme(theme));
  };

  const currentTheme = useAppSelector((state) => state.ui.theme.type);
  const isDarkMode = currentTheme === 'dark';

  return (
    <div className={`app-container ${currentTheme}`}>
      <div className="theme-toggle">
        <CheckBox
          label="Dark mode"
          checked={isDarkMode}
          onChange={(e) => setCurrentTheme(e.target.checked)}
        />
      </div>
      <ButtonDemo />
    </div>
  );
}

export default App;
