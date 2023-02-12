import { useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "../../redux/counterActions";

export default function Counter({id}) {
  const dispatch = useDispatch();
  const no = useSelector((state) => state.counterReducer);
  console.log("no:", no);

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(2))} style={{margin:10}}>-</button>
      {no}
      <button onClick={() => dispatch(increment(2))} style={{margin:10}}>+</button>
    </div>
  );
}

// Context API
// MOBX - easier
// Redux
