import { useState } from "react";

import "./Switch.css";

type SwitchProps<T> = {
  data: [T, T];
  onToggle: (value: T) => void;
  enabled?: boolean;
};

// const [user, setUser] = useState(null);

export function Switch<T>({ data, onToggle, enabled = false }: SwitchProps<T>) {
  const [active, setActive] = useState(enabled);

  const className = active ? "switch switch_active" : "switch";

  const toggle = () => {
    const value = !active;
    setActive(value);

    const toggleValue = value ? data[0] : data[1];
    onToggle?.(toggleValue);
  };

  return <div className={className} onClick={toggle} />;
}
