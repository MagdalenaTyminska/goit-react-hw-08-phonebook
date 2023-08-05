import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const nameExist = contacts.find(contact => contact.name === name);
    const numberExist = contacts.find(contact => contact.number === number);

    if (nameExist) {
      alert(`${name} is already in contacts`);
    } else if (numberExist) {
      alert(`This number ${number} is already in contacts`);
    } else {
      const contact = { name, number };
      dispatch(addContact(contact));
      form.reset();
    }
  };

  return (
    <form className={css.contactFormTable} onSubmit={handleSubmit}>
      <label className={css.contactFormLabel} htmlFor="name">
        name
      </label>
      <input
        className={css.contactFormInput}
        label="name"
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        required
        title="Name may contain only letters,
              apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
              Charles de Batz de Castelmore d'Artagnan"
      />
      <label className={css.contactFormLabel} htmlFor="tel">
        number
      </label>
      <input
        className={css.contactFormInput}
        label="tel"
        type="tel"
        name="number"
        id="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={css.contactFormButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
