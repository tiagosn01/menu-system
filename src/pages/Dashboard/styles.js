import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #efefe7;
`;
export const Sidebar = styled.div`
  display: block;
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
    font-size: 1.2rem;
    line-height: 3.8rem;
    transition: 0.3s;

    &:hover {
      color: #999;
    }

    span {
      margin-left: 1rem;
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
  }

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

export const SidebarNav = styled.ul`
  margin-top: 2rem;
  flex-wrap: wrap;

  margin-left: 2.5rem;

  a {
    display: block;
    width: 100%;
    line-height: 5.5rem;
    box-sizing: border-box;
    transition: 0.3s;
    margin-left: 0.8rem;

    span {
      display: none;
      font-size: 10px;
      line-height: 2rem;
    }

    &:hover {
      color: #999;
    }
  }
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
