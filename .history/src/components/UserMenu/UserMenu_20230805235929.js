import { useAuth } from 'components/hook/useAuth';
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
  const { isLoggedIn } = useAuth();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      {!isAuthorized && (
        <>
          <button className={css.btn} onClick={() => navigate('sign-in')}>
            Sign in
          </button>
          <button className={css.btn} onClick={() => navigate('register')}>
            Sign up
          </button>
        </>
      )}

      {isAuthorized && (
        <>
          <p className={css.userName}>{user.name}</p>
          <button className={css.btn} onClick={handleLogOut}>
            Logout
          </button>
        </>
      )}
    </>
  );
};
