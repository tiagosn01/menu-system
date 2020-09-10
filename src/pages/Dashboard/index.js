import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Sidebar,
  Main,
  SidebarUser,
  SidebarNav,
  Wrapper,
  LogoDiv,
} from './styles';

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Sidebar>
        <LogoDiv>
          <a href="www.localhost:3000/dashboard">MENUSYSTEM</a>
        </LogoDiv>

        <Wrapper>
          <SidebarUser>
            <a href="User">
              <img
                src="https://api.adorable.io/avatars/50/abott@adorable.png"
                alt="avatar"
              />
              <span>
                Tiago Silva
                <b />
              </span>
            </a>
            <div drop="false">
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
            </div>
          </SidebarUser>

          <SidebarNav>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="Teste">Pages</a>
              <div>
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
              </div>
            </li>
            <li>
              <a href="/Component">Components</a>
              <div>
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
              </div>
            </li>
            <li>
              <a href="/Forms">Forms</a>
              <div>
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
              </div>
            </li>
            <li>
              <a href="/Tables">Tables</a>
              <div>
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
              </div>
            </li>
            <li>
              <a href="/dashboard">Maps</a>
              <div>
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
              </div>
            </li>
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
