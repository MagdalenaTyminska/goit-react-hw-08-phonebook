import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../Contacts/Contacts.module.css';
import {
  selectErrorContacts,
  selectisLoadingContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section} from '../../components/Section/Section';
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
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

<div className={css.boxApp}>
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