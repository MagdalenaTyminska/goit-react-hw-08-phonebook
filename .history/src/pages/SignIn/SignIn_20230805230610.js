import React from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import css from '../Register/Register.module.css';

import { signIn } from 'redux/auth/authOperations';

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signIn({
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );

    form.reset();
  };

  return (
    <div className={clsx(css.box)}>
      <h2>Sign in to see your contacts</h2>
      <form
        className={clsx(css.formBox)}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label>
          Email
          <input className={clsx(css.input)} type="email" name="email" />
        </label>
        <label>
          Password
          <input className={clsx(css.input)} type="password" name="password" />
        </label>
        <button className={clsx(css.btn)} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
