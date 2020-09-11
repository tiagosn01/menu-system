import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #efefe7;
`;
export const Sidebar = styled.div`
  display: absolute;
  height: 100%;
  width: 20.8%;
  background: linear-gradient(-0deg, #000, #656258);
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 1px;
    width: calc(100% - 3rem);
    background: #fff;
  }
`;
export const Wrapper = styled.div``;

export const DivSubmenuUser = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-left: 2rem;
  margin-top: 1rem;

  font-size: 1rem;
  line-height: 3.8rem;
  transition: 0.3s;
`;

export const SidebarUser = styled.div`
  padding: 2rem 2rem;
  position: relative;

  img {
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > img {
      margin-right: 0.8rem;
      width: 0.8rem;
      height: 0.5rem;
    }

    &:hover {
      color: #888;
    }

    span {
      margin-left: 2rem;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  ${props =>
    props.isOpen &&
    css`
      ${DivSubmenuUser} {
        display: block;
      }
    `}

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15px;
    height: 1px;
    width: calc(100% - 3rem);
    background: #fff;
  }
`;

export const DivSumenu = styled.div`
  display: none;
`;

export const SidebarNav = styled.ul`
  display: block;
  margin-top: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-left: 2.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    line-height: 5.5rem;

    transition: 0.3s;

    img {
      margin-right: 2rem;
      width: 0.8rem;
      height: 0.5rem;
    }

    span {
      font-size: 1rem;
      line-height: 3.6rem;
    }

    &:hover {
      color: #555;
    }
  }
`;

export const LiItem = styled.li`
  ${props =>
    props.isOpen &&
    css`
      ${DivSumenu} {
        display: block;
      }
    `}
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2.5rem;

  div {
    display: flex;
    width: 100%;

    height: 6rem;
    justify-content: space-between;

    button {
      height: 5rem;
      border-radius: 1.5rem;
    }
  }
`;
