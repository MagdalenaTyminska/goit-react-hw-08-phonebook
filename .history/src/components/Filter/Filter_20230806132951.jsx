import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const filterName = event.target.value;
    dispatch(filterContact(filterName));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input className={css.filterInput} type="text" onChange={handleChange} id="filter"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"/>
    </>
  );
};
