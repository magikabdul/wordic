import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.div``;

const HomePage = ({ darkMode, setDarkMode }) => (
  <Container>
    <h1>home page</h1>
    <button type='button' onClick={() => setDarkMode(!darkMode)}>
      toggle
    </button>
    <Link to='/login'>
      <button type='button'>login</button>
    </Link>
    <Link to='register'>
      <button type='button'>register</button>
    </Link>
  </Container>
);

HomePage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default HomePage;
