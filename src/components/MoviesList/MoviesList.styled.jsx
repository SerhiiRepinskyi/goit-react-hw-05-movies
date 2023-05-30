import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  padding-left: 50px;
`;

export const MovieItem = styled.li`
  & a {
    text-decoration: none;
  }
`;

export const MovieLink = styled(Link)`
  color: black;
  font-size: 18px;
  line-height: 1.5;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #2196f3;
    border-bottom: 2px solid #2196f3;
  }
`;
