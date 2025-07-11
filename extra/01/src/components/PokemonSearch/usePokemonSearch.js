import { useEffect, useState } from "react";
import { loadData } from "../../api/loadData";

export function usePokemonSearch({ onLoad }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadData("/pokemon").then(({ results }) => {
      setResults(results);
      onLoad?.();
    });
  }, []);

  return results;
}
