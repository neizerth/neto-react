import { memo, useEffect } from "react";

type SeatProps = {
  passenger?: { 
    name: string 
  };
  isNearWindow?: boolean;
  onRender?: () => void;
}

export function Seat({ passenger, isNearWindow, onRender }: SeatProps) {

  useEffect(() => {
    onRender?.();
  }, [onRender]);

  return (
    <div>
      <h1>Seat</h1>
    </div>
  );
}

export const SeatMemo = memo(Seat);