import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
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
  cursor: pointer;

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

const zoom = keyframes`
  to {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
`;

const Circle = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: ${zoom} 0.5s;
  display: none;
`;

const Button = ({ color, children }) => {
  const circleRef = useRef(null);

  const btnAnimation = (e) => {
    const top = e.clientY - e.target.offsetTop;
    const left = e.clientX - e.target.offsetLeft;

    circleRef.current.style.top = `${top}px`;
    circleRef.current.style.left = `${left}px`;
    circleRef.current.style.display = 'block';

    setTimeout(() => {
      circleRef.current.style.display = 'none';
      return 0;
    }, 300);
  };

  return (
    <div onClick={(e) => btnAnimation(e)} aria-hidden='true'>
      <Container color={color}>
        {children}
        <Circle ref={circleRef} />
      </Container>
    </div>
  );
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
