import { useContext } from "react";
import CartContext from "./store/cartContext";

const CartBill = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="flex flex-col mt-8 w-full">
      <div className="w-1/3 self-end flex flex-row justify-between border-t-2 border-slate-300 pt-2 pb-2">
        <p className="self-center text-lg font-normal text-slate-500">Sub Total</p>
        <p className="self-center text-2xl font-semibold text-slate-500">${cartContext.total_bill}</p>
      </div>

      <div className="w-1/3 self-end flex flex-row justify-between border-t-2 border-slate-300 pt-2 pb-2">
        <p className="self-center text-lg font-normal text-slate-500">TAX</p>
        <p className="self-center text-2xl font-semibold text-slate-500">$0</p>
      </div>

      <div className="w-1/3 self-end flex flex-row justify-between border-t-2 border-slate-300 pt-2 pb-2">
        <p className="self-center text-lg font-normal text-slate-500">Shiping</p>
        <p className="self-center text-2xl font-semibold text-slate-500">$0</p>
      </div>

      <div className="flex flex-row justify-between pt-6 pb-2">
        <p className="self-center text-lg font-normal text-slate-500">Product Count (${cartContext.cart_products.length})</p>

        <div className="w-1/3 flex flex-row justify-between">
          <p className="self-center text-3xl font-semibold text-slate-500">Total</p>
          <p className="self-center text-3xl font-semibold text-slate-500">${cartContext.total_bill}</p>
        </div>
      </div>
    </div>
  );
};

export default CartBill;
