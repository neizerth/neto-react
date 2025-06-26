import { useState } from "react";
import "./Heart.css";

const inc = (x) => x + 1;

// 4. перерисовываем функцию из-за изменённого состояния
export const Heart = (props) => {
  const [count, setCount] = useState(0);

  // 2. срабатывает обработчик события
  const onClick = () => {
    props?.onLike();
    // 3. обновить хранилище/состояние
    setCount(inc);
  };

  return (
    // 1. как только нажмут на div, сработает событие click
    <div className="heart" onClick={onClick}>
      {count}
    </div>
  );
};
