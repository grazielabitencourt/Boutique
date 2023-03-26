import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Meu Site</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Catálogo</Nav.Link>
        <Nav.Link href="#about">Sobre</Nav.Link>
        <Nav.Link href="#contact">Contato</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
