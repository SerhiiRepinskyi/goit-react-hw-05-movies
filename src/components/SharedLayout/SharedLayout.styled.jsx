import styled from 'styled-components';

export const Header = styled.header`
  font-size: 24px;
  font-weight: 500;
  box-shadow: rgb(0 0 0 / 0.2) 0px 9px 9px -5px,
    rgb(0 0 0 / 0.14) 0px 9px 12px 0px, rgb(0 0 0 / 0.12) 0px 3px 24px 0px;

  padding: 20px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;
  justify-content: center;

  & a {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: #2196f3;
  }

  & .active {
    color: #2196f3;
    text-decoration: underline;
  }
`;
