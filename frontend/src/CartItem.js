import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { addProductToCart } from './Stores/Actions/Products';

const CardItem = props => {
  const { product } = props;
  const [open, setOpen] = useState(false);

  return (
    <Card onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
      <Card.Img src={product.imageUrl} style={{width: "100px"}} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2).toLocaleString('pt-BR')}</Card.Text>

        <Collapse in={open}>
          <Button variant="primary" 
          onClick={() => props.addProductToCart(product)}>
            Comprar
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </Collapse>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
