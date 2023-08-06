import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectErrorContacts,
  selectisLoadingContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.boxApp}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
    </div>
  );
};
