import { useContext } from "react";
import CartContext from "./store/cartContext";

const ProductCard = (props) => {
  const productContext = useContext(CartContext);

  return (
    <button onClick={() => productContext.increase_to_cart(props.product.id)}>
      <div className="flex flex-col border divide-y mb-5 hover:opacity-60 ease-in duration-300 rounded-lg">
        <img src="/images/TShirt.png" alt="None" className="h-60 w-52 rounded-lg"/>

        <p className="text-center text-xl font-bold text-slate-500 pt-2 pb-2">${props.product.price}</p>

        <p className="text-center text-lg font-medium text-slate-500 pt-1 pb-1">{props.product.name}</p>
      </div>
    </button>
  );
};

export default ProductCard;
