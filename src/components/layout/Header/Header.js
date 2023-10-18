import { NavLink, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="">Auto Spa Osijek</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={NavLink} to="" >Početna</Nav.Link>
            <NavDropdown renderMenuOnMount title="Ponuda" >
              <NavDropdown.Item as={Link} to="ponuda/aktivna-ponuda">Aktivna</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="ponuda/vozila-na-akciji">Akcija</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="ponuda/vozila-u-dolasku">U dolasku</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="narucivozilo">Naruči vozilo</Nav.Link>
            <Nav.Link as={NavLink} to="otkupvozila">Otkup vozila</Nav.Link>
            <Nav.Link as={NavLink} to="jamstvo">Jamstvo</Nav.Link>
            <Nav.Link as={NavLink} to="njegavozila">Njega auta</Nav.Link>
            <Nav.Link as={NavLink} to="kontakt">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
