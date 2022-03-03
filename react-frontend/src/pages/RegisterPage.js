import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <h1>register</h1>
      <Link to='/'>
        <button type='button'>register</button>
      </Link>
      <Link to='/login'>
        <button type='button'>login</button>
      </Link>
    </>
  );
};

export default RegisterPage;
