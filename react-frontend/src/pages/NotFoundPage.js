import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }

  & h1 {
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & p {
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  & :nth-child(2) {
    font-weight: bold;
  }

  & :nth-child(3) {
    font-size: 18px;
  }

  & button {
    margin-top: 16px;
    padding: 8px 24px;
    border: none;
    color: #fff;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: ${({ theme }) => theme.color.info};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      filter: brightness(0.7);
    }
  }
`;

const NotFoundPage = () => (
  <Container>
    <h1>404</h1>
    <p>Strona nie została znaleziona</p>
    <p>Strona której szukasz mogła zostać usunięta</p>
    <Link to='/'>
      <button type='button'>powrót</button>
    </Link>
  </Container>
);

export default NotFoundPage;
