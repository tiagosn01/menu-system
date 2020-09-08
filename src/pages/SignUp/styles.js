import styled from 'styled-components';
import { shade } from 'polished';
import Input from '../../components/Input';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    margin: 6rem 0;
    width: 40rem;

    text-align: center;
    align-items: center;
    justify-content: center;

    h1 {
      background: var(--color-secundary-dark);
      border-radius: 8rem;
      font-size: 24px;
      margin-bottom: 24px;
      color: #fff;
    }
    h2 {
      margin-bottom: 24px;
      color: #fff;
      text-align: left;
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
    transition: color 0.2s;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.3, '#001b48')};
    }
  }
`;

export const InputSignUp = styled(Input)``;

export const Title = styled.h1`
  color: #fff;
  font-size: 6rem;
  margin-top: 6rem;
`;
