// components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';
import { BiSolidSun } from "react-icons/bi";
import { GiMoonBats } from "react-icons/gi";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  return (
    <label className="flex items-center">
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} className="hidden" />
      <span className="toggle-label ml-2">{isDarkMode ? <GiMoonBats/> : <BiSolidSun/>}</span>
    </label>
  );
};

export default DarkModeToggle;
