import { useCallback, useMemo, useState } from "react";
import { SeatMemo as Seat } from "./Seat";

export function Aircraft() {
  console.log('Aircraft render');

  const [flying, setFlying] = useState(false);

  const toggleFlying = () => {
    setFlying(!flying);
  }

  const passenger = useMemo(() => {
    return {
      name: 'John Doe'
    }  
  }, []);

  const onRender = useCallback(() => {
    console.log('Seat rendered');
  }, []);

  return <div>
    <div onClick={toggleFlying}>{flying ? 'Летим' : 'Сидим'}</div>
    <Seat passenger={passenger} onRender={onRender}/>
  </div>;
}

export default Aircraft;