import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Auto Spa Osijek</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">Početna</Nav.Link>
            <NavDropdown renderMenuOnMount title="Ponuda">
              <NavDropdown.Item  href="#action/3.1">Aktivna</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Akcija</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">U dolasku</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Naruči vozilo</Nav.Link>
            <Nav.Link href="#link">Otkup vozila</Nav.Link>
            <Nav.Link href="#link">Jamstvo</Nav.Link>
            <Nav.Link href="#link">Kontakt</Nav.Link>
            <Nav.Link href="#link">Njega auta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
