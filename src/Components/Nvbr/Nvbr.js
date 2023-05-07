import React from 'react';
import { Navbar, Nav, Container,NavDropdown, NavLink } from 'react-bootstrap';
import logo from '../../Img/Logo.png';
import './Nvbr.css'
import { Link } from 'react-router-dom';


const Nvbr = () => {
    return (
        <div className='Nvbr'>
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="about"  >Use Cases</Nav.Link>
            <Nav.Link as={Link} to="about" >Pricing</Nav.Link>
            <Nav.Link as={Link} to="about"  >Blog</Nav.Link>
            <Nav.Link as={Link} to="about">Request a quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Nvbr;