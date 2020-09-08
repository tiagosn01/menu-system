import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--color-primary-darker);
  border-radius: 10px;
  border: none;

  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    background: ${shade(0.3, '#001b48')};
  }
`;
