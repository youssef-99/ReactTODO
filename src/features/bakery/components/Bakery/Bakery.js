import { useDispatch, useSelector } from "react-redux";
import { cakeSlice } from "../../../bakery/state";

const Bakery = () => {
  const numberOfCake = useSelector((state) => {
    return state.cake.numberOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of Available Cakes {numberOfCake}</h1>
      <button onClick={() => dispatch(cakeSlice.actions.orderCake())}>
        Order Cake
      </button>
      <button onClick={() => dispatch(cakeSlice.actions.restockCake())}>
        Restock Cake
      </button>
    </>
  );
};

export default Bakery;
