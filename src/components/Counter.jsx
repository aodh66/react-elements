import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button className="plusbtn" onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button className="minusbtn" onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </>
  );
}

export default Counter;
