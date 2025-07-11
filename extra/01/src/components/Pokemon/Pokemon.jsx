import { useEffect, useState } from "react";

import S from "./Pokemon.module.css";
import { loadData } from "../../api/loadData";

export function Pokemon({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData(`/pokemon/${name}`).then(setData);
  }, [name]);

  return (
    <div className={S.container}>
      <h2 className={S.name}>{name}</h2>
      {data && <img src={data.sprites.front_default} className={S.image} />}
    </div>
  );
}
