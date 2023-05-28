import { Suspense } from 'react';
import { Header, Nav, Main } from './SharedLayout.styled';
const { NavLink, Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>

      <Main>
        <Suspense fallback={ <div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
