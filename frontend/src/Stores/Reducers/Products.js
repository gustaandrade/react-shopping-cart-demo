export const initialState = {
  products: [{
    imageUrl: "dummy",
    price: 0.99,
    productId: "0",
    productName: "dummy"
  }],
  cart: []
}

const Products = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_PRODUCTS_TO_STORE":
      return {
        ...state, 
        products: action.products
      };

    case "ADD_PRODUCT_TO_CART": 
      return {
        ...state,
        cart: [...state.cart, action.product]
      }

    default:
      return state;
  }
}

export default Products;
