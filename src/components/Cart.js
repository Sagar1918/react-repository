import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center items-center m-10 p-7 bg-yellow-100 ">
      <h1 className="font-bold">You have a Empty Cart..!</h1>
      {/* <button onClick={handleClearCart}>Clear Cart</button>
      <ItemsList items={cartItems} /> */}
    </div>
  );
};

export default Cart;
