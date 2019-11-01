import React from 'react';

import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

import Logo from "./Assets/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Image className="header-logo" src={Logo} />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Categoria 01</Nav.Link>
          <Nav.Link href="#features">Categoria 02</Nav.Link>
          <Nav.Link href="#features">Categoria 03</Nav.Link>
          <Nav.Link href="#features">Categoria 04</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <FontAwesomeIcon icon={faUser} />
            Minha Conta
          </Nav.Link>
          
          <Nav.Link eventKey={2} href="#memes">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
