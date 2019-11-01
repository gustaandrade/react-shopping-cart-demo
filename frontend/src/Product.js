import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { addProductToCart } from './Stores/Actions/Products';

const Product = props => {
  const { product } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2).toLocaleString('pt-BR')}</Card.Text>
        <Button variant="primary" 
        onClick={() => {
          props.addProductToCart(product);
          console.log(props.cart);
        }}>
          Comprar
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
      </Card.Body>
    </Card>
  )
};


const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
