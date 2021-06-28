import React from 'react';
import useTheme from '../../hooks/useTheme';

import ThemesContext from './ThemesContext';

const ThemesState = ({ children }) => {
  const { theme, changeTheme, labelTheme } = useTheme();

  return (
    <ThemesContext.Provider
      value={{
        theme,
        currentTheme: labelTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesState;
