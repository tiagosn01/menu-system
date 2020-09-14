/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import seta from '../../assets/seta.png';
import menu from '../../api/opcoes-menu.json';
import submenu from '../../api/submenus.json';
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
  LiSubmenu,
} from './styles';

const Dashboard = () => {
  const { signOut } = useAuth();
  const [menuUser, setMenuUser] = useState(false);
  const [itensMenu, setItensMenu] = useState([
    { id: 0, drop: false },
    { id: 1, drop: false },
    { id: 2, drop: false },
    { id: 3, drop: false },
    { id: 4, drop: false },
    { id: 5, drop: false },
    { id: 6, drop: false },
    { id: 7, drop: false },
  ]);

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
                  <a href="My Profile">Meu Perfil</a>
                </li>
                <li>
                  <a href="Edit Profile">Editar Perfil</a>
                </li>
                <li>
                  <a href="Settings">Configurações</a>
                </li>
              </ul>
            </DivSubmenuUser>
          </SidebarUser>

          <SidebarNav>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>

            {menu &&
              menu.menus.map(item => (
                <LiItem
                  key={item.id}
                  isOpen={itensMenu[item.id].drop}
                  onClick={() =>
                    setItensMenu(
                      itensMenu.map(arrayItem =>
                        arrayItem.id === item.id
                          ? { ...arrayItem, drop: !arrayItem.drop }
                          : arrayItem,
                      ),
                    )
                  }
                >
                  <a href="#">
                    {item.name}
                    <img src={seta} alt="seta-branca" />
                  </a>

                  <DivSumenu>
                    <ul>
                      {submenu &&
                        submenu.submenus.map(itemSubmenu => {
                          if (itemSubmenu.menu_id === item.id) {
                            return (
                              <LiSubmenu key={itemSubmenu.id}>
                                <a href="TimeLine">
                                  <span>{itemSubmenu.name}</span>
                                </a>
                              </LiSubmenu>
                            );
                          }
                          return null;
                        })}
                    </ul>
                  </DivSumenu>
                </LiItem>
              ))}
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
