import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  color: ${({ theme }) => theme.color.text.primary};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return `${theme.color.primary}`;
      case 'secondary':
        return `${theme.color.secondary}`;
      default:
        return `${theme.color.primary}`;
    }
  }};
`;

const Button = ({ variant, children }) => {
  return <Container variant={variant}>{children}</Container>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
