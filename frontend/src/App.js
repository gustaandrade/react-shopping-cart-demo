import React, {Component} from 'react';
import { connect } from "react-redux";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Product from './Product';

import {addProductsToStore} from './Stores/Actions/Products';

class App extends Component {
  componentDidMount() {
    fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
    .then(res => res.json())
    .then((data) => {
      this.props.addProductsToStore(data);
    })
    .catch(console.log)
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <>
        <Header></Header>
        <h1>Produtos em destaque</h1>
        <div className="home-products">
          {this.props.products.map(prod => <Product product={prod} key={prod.productId}></Product>)}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addProductsToStore: products => dispatch(addProductsToStore(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
