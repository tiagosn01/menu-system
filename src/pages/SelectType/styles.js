import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  h1 {
    font-size: 34px;
    margin-bottom: 24px;
    color: #fff;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  margin-top: 60px;
`;

export const Pageitemlist = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;

    > a {
      color: #001b48;
      display: flex;
      transition: color 0.2s;
      align-items: center;
      font-weight: 500;
      font-size: 20px;
      margin: 20px 0;

      svg {
        margin-right: 10px;
      }

      &:hover {
        color: ${shade(0.3, '#001b48')};
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;
