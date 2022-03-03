import React, { useState } from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import darkTheme from 'theme/darkTheme';
import lightTheme from 'theme/lightTheme';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />
      <p>hello</p>
      <button type='button' onClick={() => setDarkMode(!darkMode)}>
        toggle
      </button>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
