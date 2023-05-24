import styled from 'styled-components';

export const Header = styled.header`
  color: black;
  font-size: 26px;
  font-weight: bold;

  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  & .active {
    color: orange;
  }

  & a {
    text-decoration-line: none;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;
