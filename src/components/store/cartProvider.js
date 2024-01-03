import { useState } from "react";
import CartContext from "./cartContext";
import product_array from "../utils/productData";

const CartProvider = (props) => {
  const [all_products] = useState(product_array);
  const [cart_products, setCart_products] = useState([]);
  const [total_bill, setTotal_bill] = useState(0);

  const increase_to_cart = (id) => {
    const product_index = cart_products.findIndex((each) => each.id === id);

    if (product_index > -1) {
      cart_products[product_index].amount++;
      const filtered_cart_products = cart_products.filter((each) => each.id !== id);

      setCart_products([...filtered_cart_products,{...cart_products[product_index], amount: cart_products[product_index].amount++,}]);
      setTotal_bill(total_bill + cart_products[product_index].price);
    } 
    else {
      const product = all_products.find((each) => each.id === id);

      setCart_products([...cart_products, { ...product, amount: 1 }]);
      setTotal_bill(total_bill + product.price);
    }
  };

  const decrease_from_cart = (id) => {
    const product_index = cart_products.findIndex((each) => each.id === id);

    if (cart_products[product_index].amount === 1) {
      setTotal_bill(total_bill - cart_products[product_index].price);
      setCart_products(cart_products.filter((each) => each.id !== id));
    } 
    else {
      setTotal_bill(total_bill - cart_products[product_index].price);
      cart_products[product_index].amount--;

      const filtered_cart_products = cart_products.filter((each) => each.id !== id);
      setCart_products([...filtered_cart_products,{...cart_products[product_index],amount: cart_products[product_index].amount--,}]);
    }
  };

  const remove_from_cart = (id) => {
    const cart_item = cart_products.find((each) => each.id === id);

    setTotal_bill(total_bill - cart_item.price * cart_item.amount);
    setCart_products(cart_products.filter((each) => each.id !== id));
  };

  return (
    <CartContext.Provider value={{ all_products, cart_products, total_bill, increase_to_cart, decrease_from_cart, remove_from_cart}}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
