import React, { useState } from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import darkTheme from 'theme/darkTheme';
import lightTheme from 'theme/lightTheme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />
      <p>hello</p>
      <button type='button' onClick={() => setDarkMode(!darkMode)}>
        toggle
      </button>
    </ThemeProvider>
  );
};

export default App;
