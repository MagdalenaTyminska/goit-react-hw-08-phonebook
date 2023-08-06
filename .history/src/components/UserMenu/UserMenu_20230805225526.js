import { useAuth } from 'hook/useAuth/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from '../UserMenu/UserMenu.module.css';
import { signOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { isAuthorized } = useAuth();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      {!isAuthorized && (
        <>
          <button className={clsx(css.btn)} onClick={() => navigate('sign-in')}>
            Sign in
          </button>
          <button
            className={clsx(css.btn)}
            onClick={() => navigate('register')}
          >
            Sign up
          </button>
        </>
      )}

      {isAuthorized && (
        <>
          <p className={css.userName}>{user.name}</p>
          <button className={clsx(css.btn)} onClick={handleLogOut}>
            Logout
          </button>
        </>
      )}
    </>
  );
};