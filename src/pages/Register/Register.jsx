import React from 'react';
import css from '../Register/Register.module.css';
import { useDispatch } from 'react-redux';
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
    <div className={css.box}>
      <h2>Register to create your phonebook</h2>
      <form className={css.formBox} onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input className={css.input} type="text" name="name" />
        </label>
        <label>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label>
          Password
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
