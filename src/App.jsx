import { createContext, useState } from 'react';
import './App.css';
import WeatherApp from './Components/WeatherApp';;

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? 'rgb(22, 24, 29)' : '#fff'
      }}
    >
      <ThemeContext.Provider value={theme}>
        <WeatherApp setTheme={setTheme} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
