import { useState } from "react";
import "./Heart.css";

const inc = (x) => x + 1;

export const Heart = (props) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    props?.onLike();
    setCount(inc);
  };

  return (
    <div className="heart" onClick={onClick}>
      {count}
    </div>
  );
};
