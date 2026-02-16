import { useState } from "react";

export function StateHeart() {
  // const data = useState(0);
  // const count = data[0];

  const [count, setCount] = useState(0);
  console.log("Текущее значение", count);

  const onClick = () => {
    setCount(count + 1);
    // setCount(count + 1);

    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    console.log(count);
  };
  return (
    <button className="heart" onClick={onClick}>
      🫶 {count}
    </button>
  );
}
