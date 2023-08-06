import React from 'react';
import clsx from 'clsx';

import css from '../Layout/Layout.module.css';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <nav className={clsx(css.navBox)}>
        <UserMenu />
      </nav>
      <Outlet />
    </main>
  );
};
