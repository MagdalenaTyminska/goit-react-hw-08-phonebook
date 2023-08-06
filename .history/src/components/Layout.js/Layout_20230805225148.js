import React from 'react';
import css from '../Layout/Layout.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <nav className={css.navBox}>
        <UserMenu />
      </nav>
      <Outlet />
    </main>
  );
};
