import { useContext } from "react";
import ProductCard from "./productCard";
import CartContext from "./store/cartContext";

const AllProducts = () => {
  const products = useContext(CartContext).all_products;

  return (
    <div className="p-3">
      <p className="text-4xl text-center pt-4 pb-7 font-extrabold">Products</p>
      
      <div className="flex flex-wrap justify-between bg-slate-50 p-8 rounded-lg">
        {products.map((each) => { return <ProductCard key={each.id} product={each} /> })}
      </div>
    </div>
  );
};

export default AllProducts;
