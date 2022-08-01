import {NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
const NavBar = () => {
  return(
  <Navbar bg="primary" variant="dark" expand="lg" className="rounded my-4">
    <Navbar.Brand className="px-2" as={NavLink} to="/">Waiter.app</Navbar.Brand>
    <Nav className="ms-auto px-2">
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
    </Nav>
  </Navbar>
  )
};

export default NavBar;