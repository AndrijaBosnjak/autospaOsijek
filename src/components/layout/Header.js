import { NavLink, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import CarouselFullPage from "./CarouselFullPage";

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
            <NavDropdown renderMenuOnMount title="Ponuda">
              <NavDropdown.Item as={Link} to="offer/active">Aktivna</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="offer/on-sale">Akcija</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="offer/in-arrival">U dolasku</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="orderCar">Naruči vozilo</Nav.Link>
            <Nav.Link as={NavLink} to="purchaseCar">Otkup vozila</Nav.Link>
            <Nav.Link as={NavLink} to="warranty">Jamstvo</Nav.Link>
            <Nav.Link as={NavLink} to="carCleaning">Njega auta</Nav.Link>
            <Nav.Link as={NavLink} to="contact">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <CarouselFullPage /> */}
    </>
  );
}

export default Header;
