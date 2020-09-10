import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import seta from '../../assets/seta.png';

import {
  Container,
  Sidebar,
  Main,
  SidebarUser,
  SidebarNav,
  Wrapper,
  LogoDiv,
  DivSubmenuUser,
  DivSumenu,
  LiItem,
} from './styles';

const Dashboard = () => {
  const { signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Sidebar>
        <LogoDiv>
          <a href="www.localhost:3000/dashboard">MENUSYSTEM</a>
        </LogoDiv>

        <Wrapper>
          <SidebarUser>
            <a href="javascript://" onClick={() => setOpen(!open)}>
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="avatar"
              />
              <span>Tiago Silva</span>

              <img
                src={seta}
                alt="seta-branca"
                style={{
                  width: 8,
                  height: 4,
                  borderRadius: 0,
                  marginLeft: 65,
                }}
              />
            </a>
            <DivSubmenuUser>
              <ul>
                <li>
                  <a href="My Profile">My Profile</a>
                </li>
                <li>
                  <a href="Edit Profile">Edit Profile</a>
                </li>
                <li>
                  <a href="Settings">Settings</a>
                </li>
              </ul>
            </DivSubmenuUser>
          </SidebarUser>

          <SidebarNav>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <LiItem>
              <a href="javascript://">
                Pages
                <img src={seta} alt="seta-branca" />
              </a>

              <DivSumenu>
                <ul>
                  <li>
                    <a href="TimeLine">
                      <span>TimeLine</span>
                    </a>
                  </li>
                  <li>
                    <a href="Login">
                      <span>Login</span>
                    </a>
                  </li>
                  <li>
                    <a href="Register">
                      <span>Register</span>
                    </a>
                  </li>
                </ul>
              </DivSumenu>
            </LiItem>
            <LiItem>
              <a href="javascript://">
                Components
                <img src={seta} alt="seta-branca" />
              </a>

              <DivSumenu>
                <ul>
                  <li>
                    <a href="Button">
                      <span>Button</span>
                    </a>
                  </li>
                  <li>
                    <a href="Input">
                      <span>Input</span>
                    </a>
                  </li>
                  <li>
                    <a href="Grid">
                      <span>Grid</span>
                    </a>
                  </li>
                  <li>
                    <a href="Notification">
                      <span>Notification</span>
                    </a>
                  </li>
                </ul>
              </DivSumenu>
            </LiItem>
            <LiItem>
              <a href="javascript://">
                Forms
                <img src={seta} alt="seta-branca" />
              </a>
              <DivSumenu>
                <ul>
                  <li>
                    <a href="Regular Forms">
                      <span>Regular Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="Extended Forms">
                      <span>Extended Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="Validation Forms">
                      <span>Validation Forms</span>
                    </a>
                  </li>
                </ul>
              </DivSumenu>
            </LiItem>
            <LiItem>
              <a href="javascript://">
                Tables
                <img src={seta} alt="seta-branca" />
              </a>
              <DivSumenu>
                <ul>
                  <li>
                    <a href="Regular Tables">
                      <span>Regular Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="Extended Tables">
                      <span>Extended Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="React Tables">
                      <span>React Tables</span>
                    </a>
                  </li>
                </ul>
              </DivSumenu>
            </LiItem>
            <LiItem>
              <a href="javascript://">
                Maps
                <img src={seta} alt="seta-branca" />
              </a>
              <DivSumenu>
                <ul>
                  <li>
                    <a href="Google Maps">
                      <span>Google Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="Full Screen Maps">
                      <span>Full Screen Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="Vector Maps">
                      <span>Vector Maps</span>
                    </a>
                  </li>
                </ul>
              </DivSumenu>
            </LiItem>
          </SidebarNav>
        </Wrapper>
      </Sidebar>
      <Main>
        <div>
          <h1>Dashboard</h1>
          <button type="button" onClick={signOut}>
            Sair
          </button>
        </div>
      </Main>
    </Container>
  );
};

export default Dashboard;
