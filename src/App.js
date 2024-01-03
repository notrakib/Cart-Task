import AllProducts from "./components/allProducts";
import Cart from "./components/cart";

function App() {
  return (
    <h1 className="flex flex-col lg:flex-row">
      <div className="lg:w-[45%]">
        <Cart />
      </div>

      <div className="lg:w-[55%]">
        <AllProducts />
      </div>
    </h1>
  );
}

export default App;
