import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px;
`;

export const LinkStyled = styled(Link)`
  display: block;
  width: 60px;
  margin-bottom: 20px;

  cursor: pointer;

  padding: 6px 12px;

  color: #010101;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
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
    background-color: #ade0f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
