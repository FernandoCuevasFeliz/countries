import { useEffect, useState } from 'react';
import { dark, light } from '../styles/themes';

const useTheme = () => {
  const [labelTheme, setLabelTheme] = useState(
    localStorage.getItem('theme') || ''
  );

  const [theme, setTheme] = useState(!labelTheme ? light : dark);

  useEffect(() => {
    if (labelTheme === 'dark') setTheme(dark);
    else setTheme(light);
  }, [labelTheme]);

  const changeTheme = () => {
    if (!labelTheme) {
      localStorage.setItem('theme', 'dark');
      setLabelTheme('dark');
    }
    if (labelTheme === 'dark') {
      localStorage.removeItem('theme');
      setLabelTheme('');
    }
  };
  return { theme, changeTheme, labelTheme };
};

export default useTheme;
