import { useState } from "react";
import "./Switch.css";

export const Switch = () => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((x) => !x);

  return (
    <div className="switch" onClick={toggle}>
      <div className="switch__background">{active ? "🧡" : "💙"}</div>
    </div>
  );
};
