import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { SignIn } from 'pages/SignIn/SignIn';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestictedRoute';
import { useAuth } from 'hook/useAuth/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Loading...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RestrictedRoute component={<Home />} />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
        <Route
          path="/sign-in"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute component={<Contacts />} redirectTo={'/sign-in'} />
          }
        />
      </Route>
    </Routes>
  );
};

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import css from './App.module.css';
// import { RotatingLines } from 'react-loader-spinner';
// import Section from './Section/Section';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { fetchContacts } from 'redux/operations';
// import { selectErrorContacts, selectisLoadingContacts } from 'redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectisLoadingContacts);
//   const error = useSelector(selectErrorContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className={css.boxApp}>
//         <Section title="Phonebook">
//           <ContactForm />
//         </Section>
//         <Section title="Contacts">
//           <Filter />
//           {isLoading && !error && (
//             <RotatingLines
//               strokeColor="#e15b64"
//               strokeWidth="5"
//               animationDuration="0.75"
//               width="96"
//               visible={true}
//               ariaLabel="rotating-lines-loading"
//             />
//           )}
//           <ContactList />
//         </Section>
//       </div>
//     </>
//   );
// };
