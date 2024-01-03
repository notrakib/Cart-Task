import { useContext } from "react";
import CartContext from "./store/cartContext";

const CartItem = (props) => {
  const productContext = useContext(CartContext);

  return (
    <div className="flex flex-row justify-between">
      <button className="w-12 p-2">
        <img src="/images/edit.png" alt="None" />
      </button>

      <div className="flex flex-row justify-between w-full border border-slate-300 p-2">
        <p className="self-center text-xl font-semibold text-slate-500">{props.item.name}</p>
        <p className="self-center text-xl font-semibold text-slate-500">${props.item.price}</p>

        <div className="w-1/5 flex flex-row justify-between">
          <button onClick={() => productContext.decrease_from_cart(props.item.id)}>
            <img src="/images/minus.png" alt="None" className="w-10" />
          </button>

          <p className="self-center text-xl font-semibold text-slate-500">{props.item.amount}</p>

          <button onClick={() => productContext.increase_to_cart(props.item.id)}>
            <img src="/images/plus.png" alt="None" className="w-10" />
          </button>
        </div>

        <p className="self-center text-xl font-semibold text-slate-500">${props.item.price * props.item.amount}</p>
      </div>

      <button className="w-14 p-2" onClick={() => productContext.remove_from_cart(props.item.id)}>
        <img src="/images/delete.png" alt="None" />
      </button>
    </div>
  );
};

export default CartItem;
