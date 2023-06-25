import React from 'react';
import styled from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styled.header}>
      <nav className={styled.navbar}>
        <ul className={styled.nav_list}>
          <li className={styled.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }): string =>
                isActive ? styled.active_link : styled.nav_link
              }
            >
              Главная
            </NavLink>
          </li>
          <li className={styled.nav_item}>
            <NavLink
              to="/create-article"
              className={({ isActive }: { isActive: boolean }): string =>
                isActive ? styled.active_link : styled.nav_link
              }
            >
              Создать статью
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
