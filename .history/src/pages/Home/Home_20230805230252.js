import React from 'react';
import css from '../Home/Home.module.css';

export const Home = () => {
  return <h1 className={clsx(css.header)}>Welcome to Phonebook App!</h1>;
};