import {} from './Searchbar.styled';
import { useState } from 'react';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Обробник для інпуту, відповідає за оновлення state searchQuery
  const handleInputChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  // Викликається під час submit - пошуку
  const handleSubmit = event => {
    event.preventDefault();
    // Відміняємо пошук по пустій стрічці
    if (searchQuery.trim() === '') {
    //   toast.error('Hello! :-)) Finally enter your search query!');
      return;
    }
    // Передаємо через prop значення searchQuery в App
    console.log('Зробив сабміт!++++++');
    // ++++++nSubmit(searchQuery);
    // Очистка після submit
    // setSearchQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          // name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </>
  );
};

export default Searchbar;
