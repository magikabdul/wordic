import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: ${({ variant }) => (variant === 'p' ? 400 : 500)};
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return '32px';
      case 'h2':
        return '26px';
      case 'h3':
        return '20px';
      case 'h4':
        return '18px';
      case 'h5':
      case 'h6':
        return '16px';
      default:
        return '14px';
    }
  }};
  line-height: ${({ variant }) => (variant === 'p' ? 1.5 : 1.2)};
  margin-bottom: ${({ variant }) => (variant === 'p' ? 0 : '0.5em')};
  text-align: ${({ align }) => align};
`;

const Typography = ({ variant, children, align }) => (
  <>
    {variant === 'h1' && (
      <Container as='h1' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'h2' && (
      <Container as='h2' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'h3' && (
      <Container as='h3' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'h4' && (
      <Container as='h4' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'h5' && (
      <Container as='h5' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'h6' && (
      <Container as='h6' variant={variant} align={align}>
        {children}
      </Container>
    )}
    {variant === 'p' && (
      <Container as='p' variant={variant} align={align}>
        {children}
      </Container>
    )}
  </>
);

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  align: PropTypes.oneOf(['center', 'inherit', 'left', 'right', 'justify']),
};

Typography.defaultProps = {
  variant: 'p',
  align: 'inherit',
};

export default Typography;
