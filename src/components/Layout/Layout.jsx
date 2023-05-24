import { Header, Nav, Main } from './Layout.styled';
const { NavLink, Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
