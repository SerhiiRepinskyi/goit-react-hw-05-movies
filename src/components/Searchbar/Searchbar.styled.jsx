import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const SearchFormInput = styled.input`
  width: 250px;
  font-size: 18px;
  padding: 5px 12px;

  border: 1px solid #2196f3;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const SearchFormButton = styled.button`
  cursor: pointer;

  width: 100%;
  max-width: 120px;
  // height: 30px;
  padding: 2px 5px;

  color: #010101;
  font-size: 18px;
  font-weight: 500;
  background-color: #79caea;

  border: none;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.24) 8px 8px 5px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #9bd6ee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
