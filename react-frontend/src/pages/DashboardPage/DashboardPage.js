import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DashboardPage = ({ darkMode, setDarkMode }) => (
  <>
    <h1>dashboard</h1>
    <button type='button' onClick={() => setDarkMode(!darkMode)}>
      toggle
    </button>
    <Link to='/'>
      <button type='button'>logout</button>
    </Link>
  </>
);

DashboardPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DashboardPage;
