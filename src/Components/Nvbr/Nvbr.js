import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Img/Logo.png'
import './Nvbr.css'



const Nvbr = () => {
    return (
        <div>
            <Navbar className='NavBar' expand="lg">
            <Container>
              <Navbar.Brand as={Link} to='/Home'><img src={logo} alt=''/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
              <Nav>
                  <Nav.Link as={Link} to="about">About us</Nav.Link>
                  <Nav.Link as={Link} to="about">Services</Nav.Link>
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