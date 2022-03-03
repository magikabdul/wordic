import React, { useState } from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import darkTheme from 'theme/darkTheme';
import lightTheme from 'theme/lightTheme';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import DashboardPage from 'pages/DashboardPage/DashboardPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles theme={darkMode ? darkTheme : lightTheme} />

      <Routes>
        <Route
          path='/'
          element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/dashboard'
          element={
            <DashboardPage darkMode={darkMode} setDarkMode={setDarkMode} />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
