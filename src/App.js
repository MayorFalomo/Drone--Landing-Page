import { createContext,useState } from 'react';
import './App.css';
import Heropage from './Components/Heropage';
import Navbar from './Components/Navbar';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}> 
    <div className="App" id={theme}> 
      <Navbar />
        <Heropage theme={theme} setTheme={setTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
