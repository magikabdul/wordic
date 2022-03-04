import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  position: relative;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: transparent;
  overflow: hidden;

  &::after {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: '';
    width: 100%;
    background-color: ${({ theme, color }) => theme.color[color]};
    transition: all 0.5s ease-in-out;
  }

  &:hover::after {
    filter: brightness(0.7);
  }
`;

const Button = ({ color, children }) => {
  return <Container color={color}>{children}</Container>;
};

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ]),
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;
