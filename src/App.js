import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import ThemesContext from './context/Themes/ThemesContext';
import IndexRoutes from './routes/IndexRoutes';
import CountryProvider from './context/Country/CountryProvider';

function App() {
  const { theme } = useContext(ThemesContext);

  return (
    <div className="App">
      <CountryProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <IndexRoutes />
        </ThemeProvider>
      </CountryProvider>
    </div>
  );
}

export default App;
