import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectFilterContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  const handleDelete = event => {
    const deletingContactId = event.target.id;
    dispatch(deleteContact(deletingContactId));
  };

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactListButton}
              id={contact.id}
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
