import React from 'react';
import { connect } from 'react-redux';

const CartItem = props => {
  return (
    <div>Oi</div>
  )
};

const mapStateToProps = state => ({
  // cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  // addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
