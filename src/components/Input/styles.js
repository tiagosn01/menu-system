import styled from 'styled-components';

export const Container = styled.div`
  background: #d6e8ee;
  border-radius: 10px;
  border: 2px solid #d6e8ee;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }
`;
