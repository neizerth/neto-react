import classNames from "classnames";
import { useState, useEffect, useCallback } from "react";

export function FnWindowSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0);

  const [active, setActive] = useState(true);

  const toggleActive = () => setActive(x => !x);

  const updateWindowSize = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [])

  useEffect(() => {
    updateWindowSize();

    return () => {
      setActive(false);
    }
  }, [])

  useEffect(() => {
    if (active) {
      window.addEventListener("resize", updateWindowSize);
    } else {
      window.removeEventListener("resize", updateWindowSize);
    }
  }, [active])

  const className = classNames(
    "window-size", 
    active && "window-size_active"
  )

  return (
    <div
      className={className}
      onClick={toggleActive}
    >
      {width}x{height}
    </div>
  );
}