export const addProductsToStore = products => ({
  type: "ADD_PRODUCTS_TO_STORE",
  products
});

export const addProductToCart = product => ({
  type: "ADD_PRODUCT_TO_CART",
  product
});