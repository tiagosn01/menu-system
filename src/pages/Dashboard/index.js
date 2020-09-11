import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import seta from '../../assets/seta.png';
import menu from '../../api/opcoes-menu.json';
import user from '../../api/user.json';

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
  const [menuUser, setMenuUser] = useState(false);
  const [pages, setPages] = useState(false);
  const [components, setComponents] = useState(false);
  const [forms, setForms] = useState(false);
  const [tables, setTables] = useState(false);
  const [maps, setMaps] = useState(false);

  return (
    <Container>
      <Sidebar>
        <LogoDiv>
          <a href="www.localhost:3000/dashboard">MENUSYSTEM</a>
        </LogoDiv>

        <Wrapper>
          <SidebarUser isOpen={menuUser} onClick={() => setMenuUser(!menuUser)}>
            <a href="#">
              <div>
                <img
                  src="https://api.adorable.io/avatars/50/abott@adorable.png"
                  alt="avatar"
                />
                <span>{user.user.name}</span>
              </div>

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
            <LiItem isOpen={pages} onClick={() => setPages(!pages)}>
              <a href="#">
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
            <LiItem
              isOpen={components}
              onClick={() => setComponents(!components)}
            >
              <a href="#">
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
            <LiItem isOpen={forms} onClick={() => setForms(!forms)}>
              <a href="#">
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
            <LiItem isOpen={tables} onClick={() => setTables(!tables)}>
              <a href="#">
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
            <LiItem isOpen={maps} onClick={() => setMaps(!maps)}>
              <a href="#">
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
