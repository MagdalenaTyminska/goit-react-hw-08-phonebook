import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const filterName = event.target.value;
    dispatch(filterContact(filterName));
  };

  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input className={css.filterInput} type="text" onChange={handleChange} />
    </>
  );
};

export default Filter;
