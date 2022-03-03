import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <>
    <h1>login</h1>
    <Link to='/dashboard'>
      <button type='button'>login</button>
    </Link>
    <Link to='/register'>
      <button type='button'>register</button>
    </Link>
  </>
);

export default LoginPage;
