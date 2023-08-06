import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import { RotatingLines } from 'react-loader-spinner';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectErrorContacts, selectisLoadingContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.boxApp}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {isLoading && !error && (
            <RotatingLines
              strokeColor="#e15b64"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
              ariaLabel="rotating-lines-loading"
            />
          )}
          <ContactList />
        </Section>
      </div>
    </>
  );
};
