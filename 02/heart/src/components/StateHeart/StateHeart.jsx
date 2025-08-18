import { useState } from "react";

export function StateHeart() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log(count);
  };
  return (
    <button className="heart" onClick={onClick}>
      🫶 {count}
    </button>
  );
}
