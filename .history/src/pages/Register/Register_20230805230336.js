import React from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import css from '../Register/Register.module.css';

import { register } from 'redux/auth/authOperations';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );
    form.reset();
  };

  return (
    <div className={clsx(css.box)}>
      <h2>Sign up to create your phonebook</h2>
      <form
        className={clsx(css.formBox)}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label>
          Username
          <input className={clsx(css.input)} type="text" name="name" />
        </label>
        <label>
          Email
          <input className={clsx(css.input)} type="email" name="email" />
        </label>
        <label>
          Password
          <input className={clsx(css.input)} type="password" name="password" />
        </label>
        <button className={clsx(css.btn)} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
