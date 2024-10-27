import { createContext, useState } from 'react';
import './App.css';
import WeatherApp from './Components/WeatherApp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Padding } from '@mui/icons-material';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '0',
        }}
      >
        {theme === 'dark' ? (
          <DarkModeIcon
            style={{
              color: '#f1c40f',
              cursor: 'pointer',
              fontSize: '35px',
              position: 'fixed',
              right: '5%',
              top: '7%',
              backgroundColor: theme === 'dark' ? '#000' : '#cdcdcd',
              padding: '5px',
              borderRadius: '50%'
            }}
            onClick={() => setTheme('light')}
          />
        ) : (
          <WbSunnyIcon
            style={{
              color: '#f39c12',
              cursor: 'pointer',
              fontSize: '35px',
              position: 'fixed',
              right: '5%',
              top: '7%',
              backgroundColor: theme === 'dark' ? '#000' : '#cdcdcd',
              padding: '5px',
              borderRadius: '50%'
            }}
            onClick={() => setTheme('dark')}
          />
        )}
      </div>
      <WeatherApp />
    </ThemeContext.Provider>
  );
}

export default App;
