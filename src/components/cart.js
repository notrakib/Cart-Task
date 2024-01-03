import { useContext } from "react";
import CartBill from "./cartBill";
import CartItem from "./cartItem";
import CartContext from "./store/cartContext";

const Cart = () => {
  const cart_products = useContext(CartContext).cart_products;

  return (
    <div className="p-3 lg:min-h-screen">
      <p className="text-4xl text-center pt-4 pb-7 font-extrabold">Cart</p>

      <div className="flex flex-col bg-slate-100 p-3 lg:min-h-screen rounded-lg pt-8">
        {cart_products.length === 0 && <p>No product is added</p>}

        {cart_products.map((each) => { return <CartItem key={each.id} item={each} /> })}

        <div className="mt-auto">
          <CartBill />
        </div>
      </div>
    </div>
  );
};

export default Cart;
