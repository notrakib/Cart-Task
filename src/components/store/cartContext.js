import React from "react";

const CartContext = React.createContext({
  all_products: [],
  cart_products: [],
  total_bill: 0,
  increase_to_cart: () => {},
  decrease_from_cart: () => {},
  remove_from_cart: () => {},
});

export default CartContext;
