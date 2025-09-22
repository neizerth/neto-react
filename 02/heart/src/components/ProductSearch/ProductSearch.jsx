import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Котелок",
  },
  {
    id: 2,
    name: "Чёрная дыра",
  },
  {
    id: 3,
    name: "Кот в мешке",
  },
  {
    id: 4,
    name: "Чебурашка",
  },
];

export function ProductSearch() {
  const [filter, setFilter] = useState("");
  const data = products.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={(event) => setFilter(event.target.value)} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
