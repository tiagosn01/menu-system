import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    margin: 80px 0;
    width: 360px;
    text-align: center;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      color: #fff;
    }

    > a {
      color: #fff;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  > a {
    color: #001b48;
    display: flex;
    margin-top: 24px;
    transition: color 0.2s;
    align-items: center;
    font-weight: 500;
    font-size: 20px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.3, '#001b48')};
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
`;
