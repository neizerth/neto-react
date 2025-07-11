import { useState } from "react";

export function useBoolean(defaultState) {
  const [state, setState] = useState(defaultState);

  const control = {
    on: () => setState(true),
    off: () => setState(false),
    toggle: () => setState((value) => !value),
    set: (value) => setState(value),
  };
  return [state, control];
}
