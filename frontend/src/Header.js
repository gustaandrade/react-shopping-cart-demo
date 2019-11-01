import React from 'react';
import { connect } from 'react-redux';

import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

import Logo from './Assets/logo.png';
import CartItem from './CartItem';

const Header = props => {
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

          <FontAwesomeIcon icon={faShoppingCart} />

          <NavDropdown title="" id="collapsible-nav-dropdown">
            <h2>MEU CARRINHO</h2>

            <NavDropdown.Item href="#">
              {props.cart.map(product => <CartItem product={product} key={product.productId}></CartItem>)}
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  // addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
