import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit, movieName }) => {
  const [searchQuery, setSearchQuery] = useState(movieName);

  // Обробник для інпуту, відповідає за оновлення state searchQuery
  const handleInputChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  // Викликається під час submit - пошуку
  const handleSubmit = event => {
    event.preventDefault();
    // Відміняємо пошук по пустій стрічці
    if (searchQuery.trim() === '') {
      alert('Hello! :-)) Finally enter your search query!');
      return;
    }
    // Передаємо через prop значення searchQuery в Movies
    onSubmit(searchQuery);

    // Очистка після submit
    // setSearchQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movieName: PropTypes.string.isRequired,
};

export default Searchbar;
