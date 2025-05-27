import { useState } from "react";
import "./Heart.css";

const inc = (x) => x + 1;

export const Heart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(inc);
  };

  return (
    <div className="heart" onClick={increment}>
      {count}
    </div>
  );
};
