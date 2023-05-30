import { Suspense } from 'react';
import { Header, Nav } from './SharedLayout.styled';
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

      <main>
        {/* Рендеринг дочірніх компонентів лише за потреби*/}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
