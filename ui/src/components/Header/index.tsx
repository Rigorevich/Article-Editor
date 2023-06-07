import React from "react";
import styled from "./Header.module.css";
import { NavLink, NavLinkProps } from "react-router-dom";

const Header: React.FC = () => {
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
