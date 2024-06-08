import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearitems } from "../Utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearitems());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        {cart.length === 0 ? (
          <h1>Cart is empty. Add Items to the cart</h1>
        ) : (
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear
          </button>
        )}
        <ItemList items={cart} />
      </div>
    </div>
  );
};
export default Cart;
